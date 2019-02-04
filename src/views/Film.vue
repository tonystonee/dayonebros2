<template>
    <page :uri="uri"/>
</template>

<script>
    import Page from '@/components/Page'
    import Category from '@/mixins/Category'
    export default {
        name: 'Film and Animation',
        mixins: [Category],
        components: {
            Page,
        },
        data(){
            return {
                categoryId: 1,
            };
        },
    }
</script>
