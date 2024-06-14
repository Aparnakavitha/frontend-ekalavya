// service
import axios from "axios";
const API_URL = "http://localhost:8888";

export const fetchbatches = async (params = {}) => {
  try {
    const response = await axios.get(`${API_URL}/batches`, { params });
    console.log(response);
    return response.data.responseData;
  } catch (error) {
    console.error("Error fetching batches:", error);
    throw error;
  }
};



const apiData = {
  batchName: null,
  participantCount: null,
  batchId: null
};



// const AdminBatchListData = {
//   greeting: {
//     welcome: "Welcome Back",
//     name: "John",
//     info: "Here is the information about",
//     profile: "Batches",
//     showButtons: false,
//   },
//   dataView: {
    // data: [
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "batch",
    //   },
    //   {
    //     miniHeading: "B301",
    //     mainHeading: "Batch 1",
    //     Count: 28,
    //     cardType: "Batch",
    //   },
    // ],
//     tableColumns: [
//       { key: "miniHeading", displayName: "Batch ID" },
//       { key: "mainHeading", displayName: "Batch Name" },
//       { key: "Count", displayName: "Count" },
//     ],
//     toggle: true,
//     itemsPerPage: 12,
//   },
// };

// export default AdminBatchListData;



