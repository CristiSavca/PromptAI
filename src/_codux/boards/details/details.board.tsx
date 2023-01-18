import { createBoard } from '@wixc3/react-board';
import { Details } from '../../../components/details/details';

export default createBoard({
    name: 'Details',
    Board: () => <Details />
});
