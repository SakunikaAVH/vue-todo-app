<template>
  <div class="container">
    <h1 class="text-center mt-5"> TODO APP</h1>

    <!-- Input -->
    <div class="d-flex">
      <input v-model="task" type="text" placeholder ="Enter task" class="form-control"/>
      <button @click="addTask" class="btn btn-warning rounded-0">ADD</button>
    </div>

    <!-- Task table -->
    <table class="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col"> Task </th>
      <th scope="col"> Status </th>
      <th scope="col" class="text-center"> Edit </th>
      <th scope="col" class="text-center"> Delete </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <td> 
        <span :class="{'Finished': task.status === 'Finished'}">{{task.name}}</span>
      </td>
      <td style="width: 120px">
          <span @click="changeStatus(index)" class="pointer" 
            :class="{'text-danger' : task.status === 'To-do',
            'text-primary' : task.status === 'In-progress',
            'text-success' : task.status === 'Finished' 
          }">
            {{task.status}}
          </span>
      </td>
      <td>
        <div class="text-center" @click="editTask(index)">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center" @click="deleteTask(index)">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
      task: '',
      editedTask: null,
      availableStatuses: ['To-do', 'In-progress', 'Finished'],

      tasks: [
        // {
        //   name: 'Order Pizza',
        //   status: 'To-do'
        // },
        // {
        //   name: 'Join skype meeting at 10:00 am',
        //   status: 'In-progress'
        // }
      ]
    }
  },

  methods: {
    addTask(){
      if(this.task.length === 0) return ;

      if(this.editedTask === null){
        this.tasks.push({
          name: this.task,
          status: 'To-do'
        });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }

      this.task = '';
    },

    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    changeStatus(index){
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if(++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    }

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pointer {
    cursor: pointer;
  }

  .Finished{
    text-decoration: line-through;
  }
</style>
