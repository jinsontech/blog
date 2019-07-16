<template>
    <div class="container">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Tags List</h3>
                <div class="card-tools">
                    <button class="btn btn-success" data-toggle="modal" data-target="#opratetag">Add New <i class="fa fa-plus"></i></button>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Created at</th>
                  <th>Status</th>
                  <th>Activity</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="tag in tags.data" :key="tag.id">
                  <td>{{ tag.id }}</td>
                  <td>{{ tag.name }}</td>
                  <td>{{ tag.created_at | myDate}}</td>
                  <td>{{ tag.status }}</td>
                  <td>
                      <a href="#" >
                          <i class="fa fa-edit"></i>
                      </a>
                      /
                      <a href="#" >
                          <i class="fa fa-trash"></i>
                      </a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
<!-- Modal -->
<div class="modal fade" id="opratetag" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog " role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
<form @submit.prevent="createTag">
    <div class="modal-body">

                <div class="form-group">
                    <input v-model="form.name" type="text" name="name" placeholder="Name"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                </div>

                <div class="form-group">
                    <select name="status" v-model="form.status" id="status" class="form-control" :class="{ 'is-invalid': form.errors.has('status') }">
                        <option >Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">In-active</option>
                    </select>
                    <has-error :form="form" field="status"></has-error>
                </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
    </div>
</form>
    </div>
</div>
</div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                tags : {},
                form :new Form({
                    id : '',
                    name     : '',
                    status   : ''
                })
            }
        },
       methods: {
           loadTags() {
              axios.get("api/tags").then(({ data }) => (this.tags = data ));  
            },
           createTag(){
            this.form.post('api/tags')
            $('#opratetag').modal('hide');
            Toast.fire({
                type: 'success',
                title: 'Tag created successfully'
                }) 
           }
       },

        created() {  
          this.loadTags(); 
        }
    }
</script>
