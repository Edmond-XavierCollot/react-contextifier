import React, { createContext as reactCreateContext } from "react";

class Contextifier {
	contexts = [];

  // Create and store context
	createContext = (name, initialValue) => {
		const NewContext = reactCreateContext(initialValue);
		this.contexts.push({
			name,
			Context: NewContext,
			Consumer: NewContext.Consumer,
			Provider: NewContext.Provider
		});
	};

  // Get a created context from the store
	getContext = (name) => this.contexts.find((c) => c.name === name);

  // Map the keys of the object passed to the "subscribe" method and return all needed contexts
	getContexts = (requiredContexts) => Object.entries(requiredContexts).map((context) => ({
			...this.getContext(context[0]),
			mapContext: context[1]
		}));
}

const contextifier = new Contextifier()

// Wrapper who import the corresponding React context "Provider"
export const Provide = ({ children, context, value }) => {
	const Provider = contextifier.getContext(context).Provider;
	return <Provider value={value}>{children}</Provider>;
};

// [Recursive] Apply multiples context "Consumer" to a Component and pass all merge props
const passContext = (contexts, Component, props = {}) => {
	const context = contexts[0];
	const Consumer = context.Consumer;
	if (contexts.length > 1)
		return (
			<Consumer>
				{(contextState) =>
					passContext(contexts.slice(1), Component, {
						...context.mapContext(contextState),
						...props
					})
				}
			</Consumer>
		);
	return (
		<Consumer>
			{(contextState) => (
				<Component {...context.mapContext(contextState)} {...props} />
			)}
		</Consumer>
	);
};

// HOC to enhance a Component with the corresponding context
export const withContext = (name, mapContext) => (Component) => (props) => {
	const Consumer = contextifier.getContext(name).Consumer;
	return (
		<Consumer>
			{(context) => <Component {...mapContext(context)} {...props} />}
		</Consumer>
	);
};

// Same as "withContext" but for multiples contexts
export const subscribe = (requiredContexts) => (Component) => (props) => {
	const contexts = contextifier.getContexts(requiredContexts);
	return passContext(contexts, Component, props);
};

export const createContext = contextifier.createContext
export const getContext = contextifier.getContext
