(()=>{const e=[{otdel:"Tech",closeProject:20,salary:100,employesNew:2,name:"Ilya",experiance:20},{otdel:"Project",closeProject:10,salary:50,employesNew:4,name:"Aryn",experiance:10},{otdel:"Design",closeProject:5,salary:3,employesNew:1,name:"Max",experiance:2}],t=e.reduce(((e,t)=>t.employesNew>e.employesNew?t:e));console.log("больше всего новых сотрудников",t);const a=e.reduce(((e,t)=>t.experiance>e.experiance?t:e));console.log(a);const i=e.filter((e=>e.closeProject>0)).map((e=>({name:e.name,exp:e.experiance})));console.log("информация о сотрудниках с закрытыми проектами ",i);const l=[{season:"winter",closeProject:10,salary:10,EmployesNewCount:5,EmployesDeletedCount:2,NewProjectCount:2},{season:"summer",closeProject:20,salary:20,EmployesNewCount:2,EmployesDeletedCount:3,NewProjectCount:3},{season:"spring",closeProject:30,salary:200,EmployesNewCount:1,EmployesDeletedCount:5,NewProjectCount:5},{season:"autumn",closeProject:50,salary:300,EmployesNewCount:10,EmployesDeletedCount:6,NewProjectCount:7}],s=l.reduce(((e,t)=>t.salary>e.salary?t:e));console.log("самый приыбльный сезон ",s);const h=l.reduce(((e,t)=>t.salary<e.salary?t:e));console.log("самый не прибыльный сезоне",h);const o=l.reduce(((e,t)=>t.EmployesNewCount>e.EmployesNewCount?t:e));console.log("больше новых сотрудников",o);const n=l.reduce(((e,t)=>t.EmployesDeletedCount>e.EmployesDeletedCount?t:e));console.log("больше всего уволенных ",n);const r={tech:[{name:"Проект Автоматизации",details:[{title:"Шасси",params:{width:45,height:20,weight:70}},{title:"Двигатель",params:{width:35,height:35,weight:120}},{title:"Экран",params:{width:25,height:15,weight:20}},{title:"Кабель",params:{width:5,height:1e3,weight:30}},{title:"Корпус",params:{width:60,height:40,weight:200}}],mainEngineer:"Иван Иванов",deadline:"2023-12-15"},{name:"Система Охлаждения",details:[{title:"Трубы",params:{width:10,height:200,weight:50}},{title:"Компрессор",params:{width:40,height:40,weight:110}},{title:"Радиатор",params:{width:50,height:30,weight:75}},{title:"Вентилятор",params:{width:20,height:20,weight:25}},{title:"Фильтр",params:{width:15,height:15,weight:10}}],mainEngineer:"Петр Петров",deadline:"2023-10-20"}],turbo:[{name:"Турбина A-100",details:[{title:"Лопатки",params:{width:5,height:30,weight:20}},{title:"Вал",params:{width:10,height:200,weight:100}},{title:"Кожух",params:{width:100,height:100,weight:400}},{title:"Подшипник",params:{width:15,height:15,weight:10}},{title:"Система смазки",params:{width:30,height:30,weight:70}}],mainEngineer:"Сергей Сергеев",deadline:"2024-02-28"},{name:"Турбогенератор B-200",details:[{title:"Ротор",params:{width:40,height:100,weight:300}},{title:"Статор",params:{width:50,height:110,weight:320}},{title:"Соединительная часть",params:{width:20,height:30,weight:50}},{title:"Панель управления",params:{width:60,height:40,weight:90}},{title:"Кабельное соединение",params:{width:10,height:500,weight:100}}],mainEngineer:"Андрей Андреев",deadline:"2023-11-15"}],chemical:[{name:"Синтез органических соединений",details:[{title:"Реактор",params:{width:100,height:200,weight:600}},{title:"Фильтр",params:{width:30,height:30,weight:40}},{title:"Колонна дистилляции",params:{width:80,height:300,weight:800}},{title:"Система насосов",params:{width:40,height:40,weight:120}}],mainEngineer:"Екатерина Смирнова",deadline:"2023-09-30"},{name:"Производство удобрений",details:[{title:"Бункер",params:{width:200,height:200,weight:1500}},{title:"Мешалка",params:{width:50,height:50,weight:200}},{title:"Лента конвейера",params:{width:100,height:1e3,weight:400}},{title:"Система сушки",params:{width:100,height:100,weight:500}},{title:"Пакетировочная машина",params:{width:60,height:60,weight:300}}],mainEngineer:"Ольга Олеговна",deadline:"2023-07-15"}]},g=e=>e.reduce(((e,t)=>{const a=(e=>e.details.reduce(((e,t)=>e+t.params.width*t.params.height/t.params.weight*150),0))(t);return e+a}),0);for(const[e,t]of Object.entries(r)){const a=g(t);console.log(`Отдел: ${e}, Бюджет: ${a}`)}const c=async()=>fetch("https://jsonplaceholder.typicode.com/posts/1");(async()=>{let e=await(async e=>{let t=await(await c()).json();return new Promise(((e,a)=>{setTimeout((()=>{e(t)}),1e3)}))})();console.log(e)})().catch((e=>{console.log(e)})),(async()=>{let e=await(async()=>await(await c()).json())(),t=null;return e.forEach((e=>{(!t||t.body.length<e.body.length)&&(t={...e})})),t})().then((e=>{console.log(e)})).catch((e=>{console.log(e)}));let m=[{name:"Rina",age:58,isActive:!0,sallary:"70000"},{name:"Kathryn",age:25,isActive:!1,sallary:"130045"},{name:"Wilfred",age:17,isActive:!0,sallary:"100000"},{name:"Genna",age:26,isActive:!0,sallary:"122300"},{name:"Celle",age:25,isActive:!0,sallary:"120540"},{name:"Torre",age:24,isActive:!1,sallary:"210320"},{name:"Amerigo",age:46,isActive:!1,sallary:"210340"},{name:"Shayne",age:11,isActive:!0,sallary:"210400"},{name:"Darline",age:32,isActive:!1,sallary:"450000"},{name:"Rourke",age:64,isActive:!1,sallary:"1200000"}];m=m.map((e=>({...e,sallary:e.isActive?(1.1*parseInt(e.sallary)).toString():e.sallary}))),console.log(m)})();