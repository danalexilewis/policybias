import { useQueryState } from 'nuqs';
import type { PolicyCard } from '../data/types';
import { inspectCardParser } from './inspectQuery';

export type UseInspectedCardResult = {
	inspectedCard: PolicyCard | null;
	inspect: (card: PolicyCard) => void;
	closeInspect: () => void;
};

/** The open policy card, stored in the URL so inspect can be shared. */
export function useInspectedCard(cards: PolicyCard[]): UseInspectedCardResult {
	const [cardId, setCardId] = useQueryState('card', inspectCardParser);
	const inspectedCard = cards.find((card) => card.id === cardId) ?? null;

	function inspect(card: PolicyCard): void {
		void setCardId(card.id);
	}

	function closeInspect(): void {
		void setCardId(null);
	}

	return { inspectedCard, inspect, closeInspect };
}
