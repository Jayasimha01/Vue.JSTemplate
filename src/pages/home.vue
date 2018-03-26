<template>
    <div>
        Home view
    </div>
</template>

<script>
    import vtable from '../components/table.vue'
    export default {
        components: {
            vtable
        },
        data() {
            return {
                items: [{
                    link: 'https://vue-loader.vuejs.org/en/',
                    productivity: '70%',
                    suggestedby: 'abc',
                    overallExperiance: 2,
                    relevantExperience: 1
                }, {
                    link: 'https://vue-loader.vuejs.org/en/',
                    productivity: '70%',
                    suggestedby: 'xyz',
                    overallExperiance: 3,
                    relevantExperience: 3
                }],
                columnwidth: 150,
                columnInfo: [{
                    columnName: 'Link',
                    width: 250, 
                    type: 'link'
                }, {
                    columnName: 'Productivity',
                    width: 120,
                    type: 'normal'
                }, {
                    columnName: 'Suggested By',
                    width: 120,
                    type: 'normal'
                },
                {
                    columnName: 'Over all Experience(yr)',
                    width: 120,
                    type: 'normal'
                },{
                    columnName: 'Relevant Experience(yr)',
                    width: 120,
                    type: 'normal'
                }]
            }
        }
    }
</script>
<style>
    #main {
        margin: 60px;
    }
</style>