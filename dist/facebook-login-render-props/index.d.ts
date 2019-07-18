import * as React from 'react'

import { ReactFacebookLoginProps, ReactFacebookLoginState } from '../..'

export interface RenderProps {
    isProcessing: boolean;
    isSdkLoaded: boolean;
    isDisabled: boolean;
    onClick(event: React.MouseEvent<HTMLElement>): void;
}

export interface ReactFacebookLoginRenderProps extends ReactFacebookLoginProps {
    render(props: RenderProps): void;
}

export default class ReactFacebookLoginRender extends React.Component<
    ReactFacebookLoginRenderProps,
    ReactFacebookLoginState
    > { }