import { createBoard } from '@wixc3/react-board';
import { Details } from '../../../components/details/details';

export default createBoard({
    name: 'Details',
    Board: () => <Details />,
    environmentProps: {
        canvasWidth: 1124,
        canvasHeight: 470,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
