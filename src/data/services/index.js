import mobileZh from './mobile-app-development-zh';
import mobileZhCn from './mobile-app-development-zh-cn';
import webZh from './web-app-development-zh';
import webZhCn from './web-app-development-zh-cn';
import uiZh from './ui-ux-design-zh';
import uiZhCn from './ui-ux-design-zh-cn';
import serverZh from './server-deployment-zh';
import serverZhCn from './server-deployment-zh-cn';
import maintenanceZh from './maintenance-support-zh';
import maintenanceZhCn from './maintenance-support-zh-cn';

const serviceContents = {
  'mobile-app-development': { zh: mobileZh, 'zh-cn': mobileZhCn },
  'web-app-development': { zh: webZh, 'zh-cn': webZhCn },
  'ui-ux-design': { zh: uiZh, 'zh-cn': uiZhCn },
  'server-deployment': { zh: serverZh, 'zh-cn': serverZhCn },
  'maintenance-support': { zh: maintenanceZh, 'zh-cn': maintenanceZhCn },
};

export default serviceContents;
