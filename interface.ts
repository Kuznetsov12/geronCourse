type season = 'winter' | 'spring' | 'summer' | 'autumn'



type otdel =  'Tech' | 'Project' | 'Design'

interface statistic{
    season: season,
    closeProject: number,
    salary: number,
    EmployesNewCount: number,
    EmployesDeletedCount: number,
    NewProjectCount: number
}
interface statisticForOtdel{
  otdel: otdel,
  employesNew : number,
  salary: number,
  closeProject: number,
  name: string,
  experiance: number
}
const statisticOtdel: statisticForOtdel[] =[
  {otdel: 'Tech' , closeProject: 20 ,  salary: 100 , employesNew: 2, name : 'Ilya' , experiance: 20},
  {otdel: 'Project' , closeProject: 10 ,  salary: 50 , employesNew: 4, name : 'Aryn' , experiance: 10},
  {otdel: 'Design' , closeProject: 5 ,  salary: 3 , employesNew: 1, name : 'Max' , experiance: 2},
]

const maxNewEmploy = statisticOtdel.reduce((seasonmaxemploy , seasondefault) =>
seasondefault.employesNew > seasonmaxemploy.employesNew ? seasondefault : seasonmaxemploy
)
console.log('больше всего новых сотрудников' ,maxNewEmploy )

const experianceMax = statisticOtdel.reduce((seasonmaxexp , defaultseason) =>
defaultseason.experiance > seasonmaxexp.experiance ? defaultseason : seasonmaxexp
)
console.log( experianceMax)

const employeCloseProject = statisticOtdel.filter((season) => season.closeProject > 0).map((season) =>({ name: season.name , exp: season.experiance}))
console.log( 'информация о сотрудниках с закрытыми проектами ', employeCloseProject)






const statistics: statistic[]  =[
  { season : 'winter', closeProject: 10, salary: 10, EmployesNewCount:5 , EmployesDeletedCount: 2, NewProjectCount: 2},
  { season : 'summer', closeProject: 20, salary: 20, EmployesNewCount:2 , EmployesDeletedCount: 3, NewProjectCount: 3},
  { season : 'spring', closeProject: 30, salary: 200, EmployesNewCount:1 , EmployesDeletedCount: 5, NewProjectCount: 5},
  { season : 'autumn', closeProject: 50, salary: 300, EmployesNewCount:10 , EmployesDeletedCount: 6, NewProjectCount: 7},
]

const maxSalarySeason = statistics.reduce((seasonmaxsalary , seasondefault) =>
 seasondefault.salary > seasonmaxsalary.salary ? seasondefault : seasonmaxsalary

)
console.log('самый приыбльный сезон ', maxSalarySeason)

const minSalarySeason = statistics.reduce((seasonminsalary , seasondefault) =>
seasondefault.salary < seasonminsalary.salary ? seasondefault : seasonminsalary
)
console.log('самый не прибыльный сезоне' , minSalarySeason)

const seasonMaxNewEmployes = statistics.reduce((seasonmaxemploy , seasondefault) =>
 seasondefault.EmployesNewCount > seasonmaxemploy.EmployesNewCount ? seasondefault : seasonmaxemploy
)
console.log('больше новых сотрудников' , seasonMaxNewEmployes)

const seasonDeletedEmploy = statistics.reduce((seasondelemploy , seasondefault) =>
  seasondefault.EmployesDeletedCount > seasondelemploy.EmployesDeletedCount ? seasondefault : seasondelemploy
)
console.log('больше всего уволенных ' , seasonDeletedEmploy)

type infoDetailProject = {
  title: string;
  params: { width: number; height: number; weight: number };
};

type Tproject = {
  name: string;
  details: infoDetailProject[];
  mainEngineer: string;
  deadline: string;
};

type DepartmentProjects = {
  [nameDeportament: string]: Tproject[];
};

const projects: DepartmentProjects = {
  "tech": [
    {
      "name": "Проект Автоматизации",
      "details": [
        { "title": "Шасси", "params": { "width": 45, "height": 20, "weight": 70 } },
        { "title": "Двигатель", "params": { "width": 35, "height": 35, "weight": 120 } },
        { "title": "Экран", "params": { "width": 25, "height": 15, "weight": 20 } },
        { "title": "Кабель", "params": { "width": 5, "height": 1000, "weight": 30 } },
        { "title": "Корпус", "params": { "width": 60, "height": 40, "weight": 200 } }
      ],
      "mainEngineer": "Иван Иванов",
      "deadline": "2023-12-15"
    },
    {
      "name": "Система Охлаждения",
      "details": [
        { "title": "Трубы", "params": { "width": 10, "height": 200, "weight": 50 } },
        { "title": "Компрессор", "params": { "width": 40, "height": 40, "weight": 110 } },
        { "title": "Радиатор", "params": { "width": 50, "height": 30, "weight": 75 } },
        { "title": "Вентилятор", "params": { "width": 20, "height": 20, "weight": 25 } },
        { "title": "Фильтр", "params": { "width": 15, "height": 15, "weight": 10 } }
      ],
      "mainEngineer": "Петр Петров",
      "deadline": "2023-10-20"
    }
  ],
  "turbo": [
    {
      "name": "Турбина A-100",
      "details": [
        { "title": "Лопатки", "params": { "width": 5, "height": 30, "weight": 20 } },
        { "title": "Вал", "params": { "width": 10, "height": 200, "weight": 100 } },
        { "title": "Кожух", "params": { "width": 100, "height": 100, "weight": 400 } },
        { "title": "Подшипник", "params": { "width": 15, "height": 15, "weight": 10 } },
        { "title": "Система смазки", "params": { "width": 30, "height": 30, "weight": 70 } }
      ],
      "mainEngineer": "Сергей Сергеев",
      "deadline": "2024-02-28"
    },
    {
      "name": "Турбогенератор B-200",
      "details": [
        { "title": "Ротор", "params": { "width": 40, "height": 100, "weight": 300 } },
        { "title": "Статор", "params": { "width": 50, "height": 110, "weight": 320 } },
        { "title": "Соединительная часть", "params": { "width": 20, "height": 30, "weight": 50 } },
        { "title": "Панель управления", "params": { "width": 60, "height": 40, "weight": 90 } },
        { "title": "Кабельное соединение", "params": { "width": 10, "height": 500, "weight": 100 } }
      ],
      "mainEngineer": "Андрей Андреев",
      "deadline": "2023-11-15"
    }
  ],
  "chemical": [
    {
      "name": "Синтез органических соединений",
      "details": [
        { "title": "Реактор", "params": { "width": 100, "height": 200, "weight": 600 } },
        { "title": "Фильтр", "params": { "width": 30, "height": 30, "weight": 40 } },
        { "title": "Колонна дистилляции", "params": { "width": 80, "height": 300, "weight": 800 } },
        { "title": "Система насосов", "params": { "width": 40, "height": 40, "weight": 120 } }
      ],
      "mainEngineer": "Екатерина Смирнова",
      "deadline": "2023-09-30"
    },
    {
      "name": "Производство удобрений",
      "details": [
        { "title": "Бункер", "params": { "width": 200, "height": 200, "weight": 1500 } },
        { "title": "Мешалка", "params": { "width": 50, "height": 50, "weight": 200 } },
        { "title": "Лента конвейера", "params": { "width": 100, "height": 1000, "weight": 400 } },
        { "title": "Система сушки", "params": { "width": 100, "height": 100, "weight": 500 } },
        { "title": "Пакетировочная машина", "params": { "width": 60, "height": 60, "weight": 300 } }
      ],
      "mainEngineer": "Ольга Олеговна",
      "deadline": "2023-07-15"
    }
  ]};
  

  const calculateProjectBudget = (project: Tproject): number => {
    const totalCost = project.details.reduce((acc, detail) => {
      const costOnDetail = (detail.params.width * detail.params.height) / detail.params.weight * 150;
      return acc + costOnDetail;
    }, 0);
  
    return totalCost;
  };



  const calculateDepartmentBudget = (departmentProjects: Tproject[]): number => {
    const totalDepartmentBudget = departmentProjects.reduce((acc, project) => {
      const projectBudget = calculateProjectBudget(project);
      return acc + projectBudget;
    }, 0);
  
    return totalDepartmentBudget;
  };
  

  for (const [department, departmentProjects] of Object.entries(projects)) {
    const departmentBudget = calculateDepartmentBudget(departmentProjects);
    console.log(`Отдел: ${department}, Бюджет: ${departmentBudget}`);
  }
  

  

