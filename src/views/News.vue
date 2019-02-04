<template>
    <page :uri="uri"/>
</template>

<script>
    import Page from '@/components/Page'
    import Category from '@/mixins/Category'
    export default {
        name: 'News',
        mixins: [Category],
        components: {
            Page,
        },
        data(){
            return {
                categoryId: 25,
            };
        },
    }
</script>
