<template>
    <div>
       <div class="card col-md-6 col-offset-3">
           <div class="card-header primary">Tasks</div>
           <div class="card-body">
           <form v-on:submit.prevent="addUpdateTask">
            <div class="form-group">
                <input type="text" class="form-control" v-model="title" placeholder="Add new task">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
           </form>
           <table class="table">
               <tr>
                   <th>Title</th>
                   <th>Options</th>
               </tr>
               <tr v-for="(task) in tasks" v-bind:key="task.id" v-bind:title="task.title">
                   <td>{{task.title}}</td>
                   <td>  
                       <button v-on:click ="editTask(task.id, task.title)" class="btn btn-info btn-sm">Edit</button>
                       <button v-on:click ="deleteTask(task.id)" class="btn btn-danger btn-sm">Delete</button>
                   </td>
               </tr>
           </table>
           </div>
       </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                tasks :[],
                id: '',
                title:'',
                edit:false
            }
        },

        mounted() {
            this.getTasks()
        },

        methods: {
            getTasks() {
                axios({method: 'GET', url: '/api/tasks'}).then(
                    result => {
                        console.log(result.data)
                        this.tasks = result.data
                    },
                    error => {
                        console.error(error)
                    }
                )
            },

            addUpdateTask () {
            if(this.edit === false){
                axios.post('/api/tasks', { title: this.title }).then(res => {
                    this.title = ''
                    this.getTasks()
                    console.log(res)
                   })
                   .catch(er=> {
                       console.log(err)
                   })
                }else{

                axios.put(`/api/tasks/${this.id}`, {
                    title: this.title
                    })
                .then(res => {
                    this.title = ''
                    this.edit = false
                    this.getTasks()
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
              }
                
            },


            editTask(id, title){
                this.id = id
                this.title = title
                this.edit = true
            },

            deleteTask(id) {
                axios.delete(`api/tasks/${id}`)
                .then(res => {
                    this.title = ''
                    this.getTasks()
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>