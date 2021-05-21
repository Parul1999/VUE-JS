<template>
    <div class="card border-primary">
        <div class="card-body text-center">
            <!-- user.picture?.large means if picture.large exists then the source will be this -->
            <img 
            :src="user.picture?.large"
            height="150"
            width="150"
            class="rounded-circle img-thumbnail border-danger zoomIn userImg"
            >
            <div class="card-title">
                <h1 class="text-primary">
                    <span class="pl-2">{{user.name?.title}}</span>
                    <span class="pl-2">{{user.name?.first}}</span>
                    <span class="pl-2">{{user.name?.last}}</span>
                </h1>
                <div>
                   <i class="fas fa-envelope"> </i>
                    {{user.email}}
                </div>
                <div>
                   <i class="fas fa-map-marker-alt"></i>
                    {{user.location?.city}}
                    {{user.location?.state}}
                    {{user.location?.country}} 
                </div>
                 <div>
                   <i class="fas fa-phone"> </i>
                    {{user.cell}}
                </div>
            </div>
            <div class="text-secondary">
                <h6>
               Registered on : {{user.registered?.date}}
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: ["user"]
}
</script>

<style >
.userImg{
 margin-top: -6vw
}
</style>