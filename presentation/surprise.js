import React from "react";
import { Text } from "spectacle";
import styled from "styled-components";

import { withState, defaultProps, compose, lifecycle } from "recompose";

const AnimatedElement = styled.div`
  display: inline-block;
  color: goldenrod;
  opacity: ${({ show }) => show ? 1 : 0};
  transition: opacity 0.3s;
`;

const enhance = compose(
  defaultProps({
    delay: 1500
  }),
  withState("showSpan", "setShowSpan", false),
  lifecycle({
    componentDidMount() {
      setTimeout(() => this.props.setShowSpan(true), this.props.delay);
    }
  })
);

const Surprise = enhance(({ showSpan, children }) =>
  <div>
    {React.Children.map(children, (child) => child.props.surpriseContent ? <AnimatedElement show={showSpan}>{child}</AnimatedElement> : child)}
</div>);

export default Surprise;
