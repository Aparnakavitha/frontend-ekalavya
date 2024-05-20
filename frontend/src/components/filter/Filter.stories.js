import filter from "./Filter"

export default{
    title:"components/Filters",
    component: filter
}

export const Filter = {
    args: {
        Heading : "Batch",
        Content : ["Batch 1", "Batch 2", "Batch 3"]
    }
}