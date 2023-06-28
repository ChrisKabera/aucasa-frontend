<template>
  <v-app class="">
    <div>
      <v-data-table
        :headers="headers"
        :items="posts"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Posts</v-toolbar-title>
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
                  New Post
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-divider class="py-2"></v-divider>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <label for="">Added By</label>
                        <v-text-field
                          v-model="editedItem.addedBy"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" md="12" class="row-height">
                        <label for="">Description</label>
                        <v-textarea
                          rows="4"
                          height="20"
                          v-model="editedItem.description"
                          outlined
                        ></v-textarea>
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
        <template v-slot:item.index="{ item }">
              <!-- <span><span>{{ item.created_at.toLocaleDateString() }}</span></span> -->
              <span><span>{{ index+1 }}</span></span>
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
    currentId: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "No",
        align: "start",
        sortable: false,
        value: "index",
      },
      { text: "Added By", value: "addedBy" },
      { text: "Description", value: "description" },
      // { text: "Carbs (g)", value: "carbs" },
      // { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    posts:[],
    editedIndex: -1,
    editedItem: {
      addedBy: "",
      description: "",
    },
    defaultItem: {
      addedBy: "",
      description: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Post" : "Edit Post";
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
    this.getPosts();
  },

  methods: {
    async getPosts() {
      try {
        this.posts = []
        const token = localStorage.getItem("token");
        const response = await fetch(
            "https://elite-harbor-production.up.railway.app/aucasa/posts/all",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
             
            }
          );
          const data = await response.json();
          console.log("data", data);
          this.posts = data
        
      } catch (error) {
        console.log("error", error);
      }
      finally {
        console.log("Get Posts");
      }
    },
    initialize() {
      this.desserts = [
        {
          addedBy: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          addedBy: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          addedBy: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          addedBy: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          addedBy: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          addedBy: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          addedBy: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          addedBy: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          addedBy: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          addedBy: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
    },

    editItem(item) {
      
      this.editedIndex = 1;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.currentId = "";
      this.currentId = item.id;
    },

    deleteItem(item) {
      this.currentId = "";
      this.currentId = item.id;
      this.editedIndex = 1;
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

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            `https://elite-harbor-production.up.railway.app/aucasa/posts/update`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
              body: JSON.stringify({
                id:this.currentId,
                addedBy: this.editedItem.addedBy,
                description: this.editedItem.description,
              }),
            }
          );
          const data = await response.json();
        } catch (error) {
        } finally {
          this.close();
          this.getPosts();
        }
      } else {
        // this.desserts.push(this.editedItem)
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            "https://elite-harbor-production.up.railway.app/aucasa/posts/new",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
              body: JSON.stringify({
                addedBy: this.editedItem.addedBy,
                description: this.editedItem.description,
              }),
            }
          );
          const data = await response.json();
        } catch (error) {
        } finally {
          this.close();
          this.getPosts();
        }
      }
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
