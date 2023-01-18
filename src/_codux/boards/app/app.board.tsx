import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App></App>,
    environmentProps: {
        canvasWidth: 1108,
        canvasHeight: 870,
        windowWidth: 1026,
        windowHeight: 768
    }
});
