import React, { createContext as reactCreateContext } from "react";

class Contextify {
	contexts = [];

	createContext = (name, initialValue) => {
		const NewContext = reactCreateContext(initialValue);
		this.contexts.push({
			name,
			Context: NewContext,
			Consumer: NewContext.Consumer,
			Provider: NewContext.Provider
		});
	};

	getContext = (name) => this.contexts.find((c) => c.name === name);

	getContexts = (requiredContexts) => Object.entries(requiredContexts).map((context) => ({
			...this.getContext(context[0]),
			mapContext: context[1]
		}));
}

const contextify = new Contextify()

export const Provide = ({ children, name, value }) => {
	const Provider = contextify.getContext(name).Provider;
	return <Provider value={value}>{children}</Provider>;
};

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

export const withContext = (name, mapContext) => (Component) => (props) => {
	const Consumer = contextify.getContext(name).Consumer;
	return (
		<Consumer>
			{(context) => <Component {...mapContext(context)} {...props} />}
		</Consumer>
	);
};

export const withContexts = (requiredContexts) => (Component) => (props) => {
	const contexts = contextify.getContexts(requiredContexts);
	return passContext(contexts, Component, props);
};

export const createContext = contextify.createContext
