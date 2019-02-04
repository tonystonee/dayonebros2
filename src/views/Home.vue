<template>
    <page :uri="uri" :maxResults="maxResults"/>
</template>

<script>
    import Page from '@/components/Page'
    export default {
        name: 'Home',
        components: {
            Page,
        },
        data(){
            return {
                maxResults: 50,
            };
        },
        computed: {
            uri(){
                return `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${this.maxResults}&key=${this.$store.state.key}`;
            },
        },
    }
</script>
