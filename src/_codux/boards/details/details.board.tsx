import { createBoard } from '@wixc3/react-board';
import { Details } from '../../../components/details/details';

export default createBoard({
    name: 'Details',
    Board: () => <Details />,
    environmentProps: {
        canvasWidth: 1124,
        canvasHeight: 854,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
