import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App></App>,
    environmentProps: {
        canvasWidth: 1194,
        canvasHeight: 1176,
        windowWidth: 1268,
        windowHeight: 1043,
    },
});
