import { page } from './lib/lib.js';

import { decorateContext, onChangeWidth, selectedLink } from './middlewares/middlewares.js';
import { showNav } from './middlewares/navigation.js';

import { showHome } from './views/homeView.js';
import { showLength } from './views/lengthView.js';
import { showArea } from './views/areaView.js';
import { showTimeView } from './views/timeView.js';
import { showWeightView } from './views/weightView.js';
import { showTemp } from './views/temperatureView.js';
import { showMemory } from './views/memoryView.js';
import { showSpeedView } from './views/speedView.js';



addEventListener("resize", onChangeWidth);

page(decorateContext);
page(showNav);
page(selectedLink);

page('/', showHome);
page('/index.html', showHome);
page('/length', showLength);
page('/area', showArea)
page('/time', showTimeView);
page('/weight', showWeightView);
page('/temperature', showTemp);
page('/memory', showMemory);
page('/speed', showSpeedView);

page.start();



