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
            <v-toolbar-title>Activities</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Activity
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-divider class="py-3"></v-divider>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <label for="">Title</label>
                        <v-text-field
                          v-model="editedItem.name"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" class="row-height">
                        <label for="">Description</label>
                        <v-textarea
                          v-model="editedItem.description"
                          rows="2"
                          outlined
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" class="row-height">
                        <label for="">Starting Date</label>
                        <v-text-field
                          v-model="editedItem.start"
                          type="date"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" class="row-height">
                        <label for="">End Date</label>
                        <v-text-field
                          v-model="editedItem.end"
                          type="date"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="py-5">
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="primary" @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
        text: "Title",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Description", value: "calories" },
      { text: "Start Date", value: "fat" },
      { text: "End Date", value: "carbs" },
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
      return this.editedIndex === -1 ? "New Activity" : "Edit Activity";
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
          name: "Activity1",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity2",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity3",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity4",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity5",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity6",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity7",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity8",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
          carbs: "15-10-2023",
          // protein: 4.0,
        },
        {
          name: "Activity9",
          calories: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          fat: "10-10-2023",
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
