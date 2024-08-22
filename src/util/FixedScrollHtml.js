import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { context as fiberContext, context, useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

// Modified ScrollHtml component from drei that has the ability to be fixed
const FixedScrollHtml = React.forwardRef((props, ref) => {
	const { children, style, fixedUntil } = props;
	const state = useScroll();
	const group = React.useRef(null);
	React.useImperativeHandle(ref, () => group.current, []);
	const { width, height } = useThree((state) => state.size);
	const fiberState = React.useContext(fiberContext);
	const root = React.useMemo(() => ReactDOM.createRoot(state.fixed), [state.fixed]);
  
	useFrame(() => {
		// Update position only if scroll has changed and if scroll is at a certain point
		if (state.delta > state.eps && state.offset >= fixedUntil) {
			group.current.style.transform = `translate3d(${
        		state.horizontal ? -width * (state.pages - 1) * state.offset : 0
				}px, ${state.horizontal ? 0 : height * (state.pages - 1) * -(state.offset - fixedUntil)}px, 0)`;
		}
	});
	
	root.render(
		<div
			ref={group}
			style={{ ...style, position: 'absolute', top: 0, left: 0, willChange: 'transform' }}
		>
			<context.Provider value={state}>
				<fiberContext.Provider value={fiberState}>
					{children}
				</fiberContext.Provider>
			</context.Provider>
		</div>
	);
	
	return null;
});

export default FixedScrollHtml;
