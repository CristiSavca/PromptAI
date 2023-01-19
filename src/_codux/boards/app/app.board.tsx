import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App></App>,
    environmentProps: {
        canvasWidth: 1108,
        canvasHeight: 938,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
