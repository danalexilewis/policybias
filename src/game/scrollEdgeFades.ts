type ScrollBox = {
	scrollTop: number;
	scrollHeight: number;
	clientHeight: number;
};

type ScrollEdgeFades = {
	top: boolean;
	bottom: boolean;
};

/** Which scroller edges still have content past them. */
export function scrollEdgeFades(box: ScrollBox): ScrollEdgeFades {
	const maxScroll = Math.max(0, box.scrollHeight - box.clientHeight);
	if (maxScroll <= 0) {
		return { top: false, bottom: false };
	}
	const epsilon = 1;
	return {
		top: box.scrollTop > epsilon,
		bottom: box.scrollTop < maxScroll - epsilon
	};
}
