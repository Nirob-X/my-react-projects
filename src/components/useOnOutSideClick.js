import {useEffect} from "react";

export default function useOnOutSideClick(ref, handler) {
  	useEffect(() => {
      	const listener = (event) => {
        	if (!ref.current || ref.current.contains(event.target)) {
          		return;
        	}
        	handler(event);
      	};
      	
      	document.addEventListener("touchstart", listener);
      	return () => {
        	document.removeEventListener("touchstart", listener);
      	};
	}, [ref, handler]);
}
