export default {
    computed:{
        darken(){
            if(this.$route.name == "home"){
                return null;
            } else{
                return 'darken-2';
            }
        },
    },
    watch: {
        $route: {
            handler(){
                if(this.$router.history.current.name == "home"){
                    this.category = null;
                } else {
                    this.category = this.$router.history.current.name;
                }
            },
            immediate: true,
        },
    }
}