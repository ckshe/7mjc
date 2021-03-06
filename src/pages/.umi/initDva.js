import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('D:/txWorks/7mjc/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('D:/txWorks/7mjc/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('D:/txWorks/7mjc/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('D:/txWorks/7mjc/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('D:/txWorks/7mjc/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('D:/txWorks/7mjc/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('D:/txWorks/7mjc/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('D:/txWorks/7mjc/src/pages/User/models/register.js').default) });
app.model({ namespace: 'rule', ...(require('D:/txWorks/7mjc/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'activities', ...(require('D:/txWorks/7mjc/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('D:/txWorks/7mjc/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('D:/txWorks/7mjc/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('D:/txWorks/7mjc/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'profile', ...(require('D:/txWorks/7mjc/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('D:/txWorks/7mjc/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('D:/txWorks/7mjc/src/pages/Account/Settings/models/geographic.js').default) });
