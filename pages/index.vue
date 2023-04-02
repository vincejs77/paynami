<template>
  <div class="p-container relative pt-[90px] pb-[100px]">
    <form
      action="data_collection"
      name="data_collection"
      enctype="multipart/form-data"
      method="post"
      class="space-y-0"
    >
      <div class="flex justify-center flex-col items-center">
        <div
          class="relative imagePreviewWrapper flex justify-center items-center mb-4 w-32 h-32 object-cover bg-cover mx-auto rounded-full bg-gray-200"
          :style="{ 'background-image': `url(${previewImage}) !important` }"
          @click="selectImage"
        >
          <svg
            v-if="previewImage == null"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 h-8 text-gray-500"
          >
            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
            <path
              fill-rule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <span
            class="absolute bottom-0 right-0 rounded-full bg-white p-2"
            v-if="previewImage !== null"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-gray-400"
            >
              <path
                d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
              />
            </svg>
          </span>
        </div>
        <input
          ref="fileInput"
          hidden
          name="_image_profile"
          id="_image_profile"
          @change="onChange_image_profile"
          type="file"
          @input="pickFile"
          required
          accept="image/*"
        />

        <label class="text-lg font-semibold text-gray-700"> Profil</label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_nom_complet" type="text" placeholder=" " />
          <span class="placeholder">Nom complet du motard</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_email" type="mail" placeholder=" " />
          <span class="placeholder">Adresse e-mail</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_telephone" type="tel" placeholder=" " />
          <span class="placeholder">Numéro de téléphone</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_date_de_naissance" type="date" placeholder="mm/dd/yyyy" />
          <span class="placeholder">Date de naissance</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_adresse" type="text" placeholder=" " />
          <span class="placeholder">Adresse (précise)</span>
        </label>
      </div>

      <div class="pt-4 pb-0 text-center">
        <span class="text-lg font-semibold text-gray-700"> Affiliation et plaque</span>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_affiliation" type="text" placeholder=" " />
          <span class="placeholder">Affiliation</span>
        </label>
      </div>

      <div>
        <label class="custom-field one w-full">
          <input v-model="_plaque_immatriculation" type="text" placeholder=" " />
          <span class="placeholder">Plaque d'immatriculation (plusieurs motos)</span>
        </label>
      </div>

      <div class="pt-4 pb-0 text-center">
        <span class="text-lg font-semibold text-gray-700"> Assurance </span>
      </div>

      <div>
        <label class="relative custom-field one w-full">
          <select v-model="_compagnie_asssurance">
            <option value="0" selected disabled>Selectionnez</option>
            <option value="1">Compagnie 1</option>
            <option value="1">Compagnie 2</option>
            <option value="1">Compagnie 3</option>
          </select>
          <span class="absolute right-6 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span class="-top-3 absolute left-6 bg-white px-1 text-gray-500">
            Compagnie d'asssurance
          </span>
        </label>
      </div>

      <div>
        <label class="relative custom-field one w-full">
          <select v-model="_type_assurance">
            <option value="0" selected disabled>Selectionnez</option>
            <option value="1">Assurance Type 1</option>
            <option value="1">Assurance Type 2</option>
            <option value="1">Assurance Type 3</option>
          </select>
          <span class="absolute right-6 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span class="-top-3 absolute left-6 bg-white px-1 text-gray-500">
            Type d'assurance
          </span>
        </label>
      </div>

      <div>
        <button
          @click="save_motard"
          type="button"
          class="shadow-lg shadow-gray-400 mt-6 btn-primay w-full"
        >
          Valider et enregister
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

const _image_profile = ref("");
const _nom_complet = ref("Vincent Asani");
const _email = ref("emai");
const _telephone = ref("dede");
const _date_de_naissance = ref(
  new Date("Jan 1, 1990 00:00:00").toISOString().slice(0, 10)
);
const _adresse = ref("dede");
const _affiliation = ref("dede");
const _plaque_immatriculation = ref("de");
const _compagnie_asssurance = ref(1);
const _type_assurance = ref(1);

onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Ajouter nouveau";
  useGlobalStore().$state.isBackBtn = true;
  useGlobalStore().$state.isMenuVisible = true;
});

const previewImage = ref();
const fileInput = ref();

const selectImage = () => {
  fileInput.value.click();
};

const emit = defineEmits(["input"]);

const onChange_image_profile = (e) => {
  emit("update:_image_profile", e.target.files[0]);
};

var formData = new FormData();

const pickFile = () => {
  let input = fileInput.value;
  let file = input.files;
  if (file && file[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file[0]);
    emit("input", file[0]);
    _image_profile.value = file[0];
  }

  console.log(_image_profile.value);
};

const { createItems } = useDirectusItems();

const save_motard = async () => {
  formData.append("_image_profile", _image_profile.value);
  Object.assign(_image_profile.value, {
    filename_download: _image_profile.value?.name,
    storage: "s3",
  });
  var items = [
    {
      image_profile: _image_profile.value,
      nom_complet: _nom_complet.value,
      email: _email.value,
      telephone: _telephone.value,
      date_de_naissance: _date_de_naissance.value,
      adresse: _adresse.value,
      affiliation: _affiliation.value,
      plaque_immatriculation: _plaque_immatriculation.value,
      compagnie_asssurance: _compagnie_asssurance.value,
      type_assurance: _type_assurance.value,
    },
  ];
  try {
    await createItems({
      collection: "data_collection",
      items,
    });

    console.log(items);
  } catch (e) {}
};
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #fff inset !important;
}
</style>
