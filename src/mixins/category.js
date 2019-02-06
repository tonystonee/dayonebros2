export default {
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