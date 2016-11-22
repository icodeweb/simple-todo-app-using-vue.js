
var app = new Vue({
   el : '#app',
   data : {
      new_task : '',
      task_list : ['Task 1', 'Task 2', 'Task 3', 'Task 4']
   },
   methods:{
        addTask : function(){
          if(this.new_task){
            this.task_list.push(this.new_task);
            this.new_task = '';
          }
      },

      taskCompleted : function(index){
        this.task_list.splice(index, 1);
      }
   }
})





  // var app = angular.module('TodoAPP',[]);

  // app.controller('todoController',function($scope){

  //   $scope.task_list = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 2'];

  //   $scope.new_task = function(){
  //       var new_task = $scope.task;
  //       $scope.task_list.push(new_task);
  //       $scope.task = '';
  //   }

  //   $scope.delete_task = function(index){
  //        $scope.task_list.splice(index, 1);
  //   }

  //   $scope.$watch('task',function(newValue){
  //       $scope.btn_disabled = true; 
  //       if (typeof newValue === "undefined") return;
  //       if(newValue.length > 2)  
  //         $scope.btn_disabled = false;      
  //   })
  // })