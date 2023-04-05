const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5dy57/",
            name: "springboot5dy57",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot5dy57/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "民宿租赁系统"
        } 
    }
}
export default base
