var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function($scope, $mdSidenav, studentService) {
  var allStudents = [];
  
  $scope.subgroups = [1,2];
  $scope.selectedsubgroups = [1,2];
  $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx >-1) {
      list.splice(idx, 1);
    } else {
      list.push(item);
    }
  };
  $scope.exists = function(item, list) {
    return list.indexOf(item) > -1;
  };

    $scope.filterBySubgroup = function (student) {
        return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    };
  
  $scope.selected = null;
  $scope.students = allStudents;
  $scope.selectStudent = selectStudent;
  $scope.toggleSidenav = toggleSidenav;
  
  loadStudents();
  
  function loadStudents() {
    studentService.loadAll()
      .then(function(students){
        allStudents = students;
        $scope.students = [].concat(students);
        $scope.selected = $scope.students[0];
      })
  }
  
  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }
  
  function selectStudent(student) {
    $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
    $scope.toggleSidenav('left');
  }

}]);

app.service('studentService', ['$q', function($q) {
  var students = [{
      'subgroup': 1,
      'name': 'Anastasiia Goncharova',
      'codeSourceUrl': 'https://github.com/anastasiagoncharova/Myweather',
      'websiteUrl': 'http://anastasiagoncharova.github.io/Myweather/',
      'cvUrl': 'https://www.dropbox.com/s/oguwlvthzcqmtbv/Goncharova_CV.pdf?dl=0',
      photo: 'images/students/goncharova.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Dmytro Matiichuk',
      'codeSourceUrl': 'https://github.com/Dimas169/weather.html.git',
      'cvUrl': 'https://www.dropbox.com/s/szcu07gx9jhdq8v/CV_Matiichuk.pdf?dl=0',
      websiteUrl: 'http://dimas169.github.io/weather.html',
      photo: 'images/students/matiichuk.png'
  },
  {
      'subgroup': 1,
      'name': 'Iryna Dragan',
      'codeSourceUrl': 'http://github.com/iradragan/weather_project.git',
      'websiteUrl': 'http://iradragan.github.io/weather_project',
      cvUrl: 'https://drive.google.com/file/d/0B_viaxA_dCT5UGJXZG94U0R1aXM/view?usp=sharing',
      photo: 'images/students/dragan-iryna.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Marta Dropko',
      'codeSourceUrl': 'https://github.com/MartaDropko/webweatherforecast',
      'websiteUrl': 'http://webweatherforecast-martadropko.c9users.io/index.html',
      cvUrl: 'https://www.dropbox.com/s/vif47n47pk5aeyi/Piven%20Maxym.pdf?dl=0',
      photo: 'images/students/dropko.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Maksym Piven\'',
      'codeSourceUrl': 'https://github.com/justmax01/samplesite/tree/gh-pages',
      'websiteUrl': 'http://justmax01.github.io/samplesite/',
      'cvUrl': 'https://www.dropbox.com/s/vif47n47pk5aeyi/Piven%20Maxym.pdf?dl=0',
      photo: 'images/students/piven.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Nadiia Shpytkovs\'ka',
      'codeSourceUrl': 'https://github.com/nadinn20/website/blob/gh-pages/index.html',
      'websiteUrl': 'http://nadinn20.github.io/weather-forecast',
      'cvUrl': 'https://drive.google.com/drive/folders/0BwII8zRpmyg5RVBUNjFvT1kyT1k',
      photo: 'images/students/shpytkovska.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Yaroslav Drahan',
      'codeSourceUrl': 'https://github.com/yardr/weather_project/tree/gh-pages',
      'websiteUrl': 'http://yardr.github.io/weather_project',
      'cvUrl': 'https://github.com/yardr/weather_project/tree/gh-pages/My%20CV',
      photo: 'images/students/drahan.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Yaroslav Matushevskyi',
      'codeSourceUrl': 'https://github.com/matushevskyi/WeatherApp.git',
      'cvUrl': 'https://www.dropbox.com/s/neidlxftyhagsaq/CV_YM_English.pdf?dl=0',
      photo: 'images/students/matushevskiy.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Ihor Zaiats',
      'codeSourceUrl': 'https://github.com/IgorZayats/MyWeather.git',
      'websiteUrl': 'http://igorzayats.github.io/MyWeather',
      'cvUrl': 'https://www.dropbox.com/s/1t1ggxw7mkrdxt6/ZayacIM.pdf?dl=0',
      photo: 'images/students/zaiats.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Volodymyr Gladiuk',
      'codeSourceUrl': 'https://github.com/glvolodia/samplewebsite',
      'websiteUrl': 'http://glvolodia.github.io/samplewebsite',
      photo: 'images/students/gladiuk.jpg'
  },
  {
      'subgroup': 1,
      'name': 'Vitalii Semeruk',
      'cvUrl': 'https://drive.google.com/drive/folders/0B8IuH1Cl2NqCcVRCZ3Vlbjd4SXM',
      photo: 'images/students/no-photo.gif'
  },
  {
      'subgroup': 1,
      'name': 'Vasylyna Bukartyk',
      'codeSourceUrl': 'https://github.com/Vasylyna199377/sample',
      'websiteUrl': 'http://vasylyna199377.github.io/sample',
      'cvUrl': 'https://www.dropbox.com/s/vgrrj6slhpdq98z/Vasylyna%20Bukartyk.pdf?dl=0',
      photo: 'images/students/bukartyk.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Vasyl Kozhushko',
      'codeSourceUrl': 'https://github.com/AlexK89/newwebsite/tree/gh-pages',
      'websiteUrl': 'http://alexk89.github.io/Weather-Project/',
      photo: 'images/students/kozhushko.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Valentyn Kravchenko',
      'codeSourceUrl': 'https://github.com/valikwade/weather-project/tree/gh-pages',
      'websiteUrl': 'http://valikwade.github.io/weather-project/',
      photo: 'images/students/kravchenko.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Roman Kushka',
      'codeSourceUrl': 'https://github.com/Milanroman/simplesite',
      'websiteUrl': 'http://milanroman.github.io/simplesite',
      'cvUrl': 'https://www.dropbox.com/s/d3win8vauet8ckc/CV__Kushka_Roman.pdf?dl=0',
      photo: 'images/students/kushka.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Roman Golovatyi',
      'codeSourceUrl': 'https://github.com/SidiromUA/weather/tree/gh-pages',
      'websiteUrl': 'http://sidiromua.github.io/firstproject/index.html',
      photo: 'images/students/golovatiy.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Oleksandr Stepanov',
      'codeSourceUrl': 'https://github.com/OleksandrStepanov/website/tree/gh-pages',
      'websiteUrl': 'http://oleksandrstepanov.github.io/website',
      'cvUrl': 'https://drive.google.com/file/d/0B3ep8tPz75A1cWZ3bm5aMFk0RjA/view?usp=sharing ',
      photo: 'images/students/stepanov.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Olia Sheremeta',
      'codeSourceUrl': 'https://github.com/ollllla/website/tree/gh-pages',
      'websiteUrl': 'http://ollllla.github.io/website',
      photo: 'images/students/no-photo.gif'
  },
  {
      'subgroup': 2,
      'name': 'Pavlo Bazyliuk',
      'websiteUrl': 'http://pbazyliuk.github.io/weather-info-project',
      photo: 'images/students/no-photo.gif'
  },
  {
      'subgroup': 2,
      'name': 'Roman Kuchkuda',
      'codeSourceUrl': 'https://github.com/romko43/forecast/tree/gh-pages',
      'websiteUrl': 'http://romko43.github.io/forecast/',
      'cvUrl': 'https://drive.google.com/file/d/0BwBtgDApqUiSOVRtOGl5YWotYmM/view?usp=sharing',
      photo: 'images/students/kuchkuda.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Roman Bregey',
      'codeSourceUrl': 'https://github.com/raamon15/first_website',
      'websiteUrl': 'http://raamon15.github.io/first_website',
      'cvUrl': 'https://drive.google.com/open?id=0Bw7RVE2X_29gS1JSU1JrVFhrbVE',
      photo: 'images/students/bregei.png'
  },
  {
      'subgroup': 2,
      'name': 'Mykhailo Vlasiuk',
      'codeSourceUrl': 'https://github.com/MishaVlasiuk/simple-weather',
      'websiteUrl': 'http://mishavlasiuk.github.io/simple-weather',
      photo: 'images/students/vlasiuk.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Roman Petryk',
      'codeSourceUrl': 'https://github.com/Nahtigal/Myweather/tree/gh-pages',
      'websiteUrl': 'http://nahtigal.github.io/Myweather/',
      photo: 'images/students/petryk.jpg'
  },
  {
      'subgroup': 2,
      'name': 'Khrystyna Danyliuk',
      'codeSourceUrl': 'https://github.com/kristinadanilyuk/kristina-c/tree/gh-pages',
      'websiteUrl': 'http://kristinadanilyuk.github.io/kristina-c/',
      photo: 'images/students/daniliuyk.jpg'
  }];

  // Promise-based API
  return {
      loadAll: function() {
          // Simulate async nature of real remote calls
          return $q.when(students);
      }
  };
}]);
