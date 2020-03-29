import { CandidatesTypes } from './candidates.types';

export const candidates = monsters => ({
    type: CandidatesTypes.CANDIDATES,
    payload: monsters
});
