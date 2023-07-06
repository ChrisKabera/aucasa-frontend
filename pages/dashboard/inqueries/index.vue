<template>
    <v-app class="">
      <div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Inqueries</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </div>
    </v-app>
  </template>
  <script>
  export default {
    data: () => ({
      currentId:'',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "Submitted By",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Leader In Charge", value: "fat" },
        { text: "Description", value: "calories" },
        
        // { text: "End Date", value: "carbs" },
        // { text: "Protein (g)", value: "protein" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        start: "",
        end: "",
        description: "",
      },
      defaultItem: {
        name: "",
        start: "",
        end: "",
        description: "",
      },
    }),
  
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New kabera" : "Edit kabera";
      },
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
  
    created() {
      this.initialize();
    },
  
    methods: {
      initialize() {
        this.desserts = [
          {
            name: "Kabera1",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 1",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera2",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 2",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera3",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 3",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera4",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 4",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera5",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 6",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera7",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 7",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera8",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 8",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          {
            name: "kabera9",
            calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            fat: "Leader 9",
            carbs: "15-10-2023",
            // protein: 4.0,
          },
          
        ];
      },
  
      editItem(item) {
        this.currentId = ''
        this.currentId =1
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
  
      deleteItem(item) {
        this.currentId = ''
        this.currentId =1
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },
  
      deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1);
        this.closeDelete();
      },
  
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          this.desserts.push(this.editedItem);
        }
        this.close();
      },
    },
    layout: "admin",
  };
  </script>
  <style lang="scss" scoped>
  .row-height {
    margin-top: -10px;
  }
  </style>
  