import * as React from 'react';

export function route(url: string, replace?: boolean): boolean;
export function route(options: { url: string; replace?: boolean }): boolean;

export function getCurrentUrl(): string;

export interface Location {
    pathname: string;
    search: string;
}

export interface CustomHistory {
    listen(callback: (location: Location) => void): () => void;
    location: Location;
    push(path: string): void;
    replace(path: string): void;
}

export interface RoutableProps {
    path?: string;
    default?: boolean;
}

export interface RouterOnChangeArgs {
    router: Router;
    url: string;
    previous?: string;
    active: React.VNode[];
    current: React.VNode;
}

export interface RouterProps extends RoutableProps {
    history?: CustomHistory;
    static?: boolean;
    url?: string;
    onChange?: (args: RouterOnChangeArgs) => void;
}

export class Router extends React.Component<RouterProps, {}> {
    canRoute(url: string): boolean;
    getMatchingChildren(
        children: React.VNode[],
        url: string,
        invoke: boolean
    ): React.VNode[];
    routeTo(url: string): boolean;
    render(props: RouterProps, {}): React.VNode;
}

export const subscribers: Array<(url: string) => void>

type AnyComponent<Props> =
  | React.FunctionalComponent<Props>
  | React.ComponentConstructor<Props, any>;

export interface RouteProps<Props> extends RoutableProps {
    component: AnyComponent<Props>;
}

export function Route<Props>(
    props: RouteProps<Props> & Partial<Props>
): React.VNode;

export function Link(props: {activeClassName?: string} & JSX.HTMLAttributes): React.VNode;

declare module 'preact' {
    export interface Attributes extends RoutableProps {}
}

export default Router;
