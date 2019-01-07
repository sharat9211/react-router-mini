import * as React from 'react';

import { Link as StaticLink, RoutableProps } from './';

export class Match extends React.Component<RoutableProps, {}> {
    render(): React.VNode;
}

export interface LinkProps extends JSX.HTMLAttributes {
    activeClassName: string;
}

export function Link(props: LinkProps): React.VNode;

export default Match;
