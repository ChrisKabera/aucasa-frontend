import { Bar } from "vue-chartjs/legacy";
import {
  CategoryScale,
  Chart,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LineElement,
  PointElement
);

export default {
  extends: Bar,
  props: ["chartData", "options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
