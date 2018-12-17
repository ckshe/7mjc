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

app.model({ namespace: 'global', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/User/models/register.js').default) });
app.model({ namespace: 'rule', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'activities', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'profile', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('/Users/mac/Desktop/guess1.6/my-project/src/pages/Account/Settings/models/geographic.js').default) });
