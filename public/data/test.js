window.data = window.data ?? {}
window.data.test = {
    "errors": {},
    "auth": {
        "user": {
            "id": 1,
            "role_id": 1,
            "name": "admin",
            "email": "admin@govorov.ru",
            "avatar": "users/default.png",
            "email_verified_at": null,
            "settings": [],
            "created_at": "2022-10-16T22:52:32.000000Z",
            "updated_at": "2022-10-16T22:52:32.000000Z"
        }
    },
    "ziggy": {
        "url": "https://govorov.plitkalit.ru",
        "port": null,
        "defaults": [],
        "routes": {
            "ignition.healthCheck": {
                "uri": "_ignition/health-check",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "ignition.executeSolution": {
                "uri": "_ignition/execute-solution",
                "methods": [
                    "POST"
                ]
            },
            "ignition.updateConfig": {
                "uri": "_ignition/update-config",
                "methods": [
                    "POST"
                ]
            },
            "voyager.login": {
                "uri": "admin/login",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.postlogin": {
                "uri": "admin/login",
                "methods": [
                    "POST"
                ]
            },
            "voyager.dashboard": {
                "uri": "admin",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.logout": {
                "uri": "admin/logout",
                "methods": [
                    "POST"
                ]
            },
            "voyager.upload": {
                "uri": "admin/upload",
                "methods": [
                    "POST"
                ]
            },
            "voyager.profile": {
                "uri": "admin/profile",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.order": {
                "uri": "admin/users/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.action": {
                "uri": "admin/users/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.update_order": {
                "uri": "admin/users/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.restore": {
                "uri": "admin/users/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.relation": {
                "uri": "admin/users/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.media.remove": {
                "uri": "admin/users/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.index": {
                "uri": "admin/users",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.create": {
                "uri": "admin/users/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.store": {
                "uri": "admin/users",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.show": {
                "uri": "admin/users/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.edit": {
                "uri": "admin/users/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.update": {
                "uri": "admin/users/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.users.destroy": {
                "uri": "admin/users/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.menus.order": {
                "uri": "admin/menus/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.action": {
                "uri": "admin/menus/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.update_order": {
                "uri": "admin/menus/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.restore": {
                "uri": "admin/menus/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.relation": {
                "uri": "admin/menus/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.media.remove": {
                "uri": "admin/menus/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.index": {
                "uri": "admin/menus",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.create": {
                "uri": "admin/menus/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.store": {
                "uri": "admin/menus",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.show": {
                "uri": "admin/menus/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.edit": {
                "uri": "admin/menus/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.update": {
                "uri": "admin/menus/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.menus.destroy": {
                "uri": "admin/menus/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.roles.order": {
                "uri": "admin/roles/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.action": {
                "uri": "admin/roles/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.update_order": {
                "uri": "admin/roles/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.restore": {
                "uri": "admin/roles/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.relation": {
                "uri": "admin/roles/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.media.remove": {
                "uri": "admin/roles/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.index": {
                "uri": "admin/roles",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.create": {
                "uri": "admin/roles/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.store": {
                "uri": "admin/roles",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.show": {
                "uri": "admin/roles/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.edit": {
                "uri": "admin/roles/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.update": {
                "uri": "admin/roles/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.roles.destroy": {
                "uri": "admin/roles/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.map-dots.order": {
                "uri": "admin/map-dots/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.action": {
                "uri": "admin/map-dots/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.update_order": {
                "uri": "admin/map-dots/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.restore": {
                "uri": "admin/map-dots/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.relation": {
                "uri": "admin/map-dots/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.media.remove": {
                "uri": "admin/map-dots/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.index": {
                "uri": "admin/map-dots",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.create": {
                "uri": "admin/map-dots/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.store": {
                "uri": "admin/map-dots",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.show": {
                "uri": "admin/map-dots/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.edit": {
                "uri": "admin/map-dots/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.update": {
                "uri": "admin/map-dots/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.map-dots.destroy": {
                "uri": "admin/map-dots/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.gallery-photos.order": {
                "uri": "admin/gallery-photos/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.action": {
                "uri": "admin/gallery-photos/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.update_order": {
                "uri": "admin/gallery-photos/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.restore": {
                "uri": "admin/gallery-photos/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.relation": {
                "uri": "admin/gallery-photos/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.media.remove": {
                "uri": "admin/gallery-photos/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.index": {
                "uri": "admin/gallery-photos",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.create": {
                "uri": "admin/gallery-photos/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.store": {
                "uri": "admin/gallery-photos",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.show": {
                "uri": "admin/gallery-photos/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.edit": {
                "uri": "admin/gallery-photos/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.update": {
                "uri": "admin/gallery-photos/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.gallery-photos.destroy": {
                "uri": "admin/gallery-photos/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.albums.order": {
                "uri": "admin/albums/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.action": {
                "uri": "admin/albums/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.update_order": {
                "uri": "admin/albums/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.restore": {
                "uri": "admin/albums/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.relation": {
                "uri": "admin/albums/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.media.remove": {
                "uri": "admin/albums/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.index": {
                "uri": "admin/albums",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.create": {
                "uri": "admin/albums/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.store": {
                "uri": "admin/albums",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.show": {
                "uri": "admin/albums/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.edit": {
                "uri": "admin/albums/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.update": {
                "uri": "admin/albums/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.albums.destroy": {
                "uri": "admin/albums/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.awards.order": {
                "uri": "admin/awards/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.action": {
                "uri": "admin/awards/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.update_order": {
                "uri": "admin/awards/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.restore": {
                "uri": "admin/awards/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.relation": {
                "uri": "admin/awards/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.media.remove": {
                "uri": "admin/awards/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.index": {
                "uri": "admin/awards",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.create": {
                "uri": "admin/awards/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.store": {
                "uri": "admin/awards",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.show": {
                "uri": "admin/awards/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.edit": {
                "uri": "admin/awards/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.update": {
                "uri": "admin/awards/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.awards.destroy": {
                "uri": "admin/awards/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.books.order": {
                "uri": "admin/books/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.action": {
                "uri": "admin/books/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.update_order": {
                "uri": "admin/books/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.restore": {
                "uri": "admin/books/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.relation": {
                "uri": "admin/books/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.media.remove": {
                "uri": "admin/books/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.index": {
                "uri": "admin/books",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.create": {
                "uri": "admin/books/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.store": {
                "uri": "admin/books",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.show": {
                "uri": "admin/books/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.edit": {
                "uri": "admin/books/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.update": {
                "uri": "admin/books/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.books.destroy": {
                "uri": "admin/books/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.favorites.order": {
                "uri": "admin/favorites/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.action": {
                "uri": "admin/favorites/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.update_order": {
                "uri": "admin/favorites/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.restore": {
                "uri": "admin/favorites/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.relation": {
                "uri": "admin/favorites/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.media.remove": {
                "uri": "admin/favorites/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.index": {
                "uri": "admin/favorites",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.create": {
                "uri": "admin/favorites/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.store": {
                "uri": "admin/favorites",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.show": {
                "uri": "admin/favorites/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.edit": {
                "uri": "admin/favorites/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.update": {
                "uri": "admin/favorites/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.favorites.destroy": {
                "uri": "admin/favorites/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.gbooks.order": {
                "uri": "admin/gbooks/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.action": {
                "uri": "admin/gbooks/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.update_order": {
                "uri": "admin/gbooks/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.restore": {
                "uri": "admin/gbooks/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.relation": {
                "uri": "admin/gbooks/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.media.remove": {
                "uri": "admin/gbooks/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.index": {
                "uri": "admin/gbooks",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.create": {
                "uri": "admin/gbooks/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.store": {
                "uri": "admin/gbooks",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.show": {
                "uri": "admin/gbooks/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.edit": {
                "uri": "admin/gbooks/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.update": {
                "uri": "admin/gbooks/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.gbooks.destroy": {
                "uri": "admin/gbooks/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.monuments.order": {
                "uri": "admin/monuments/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.action": {
                "uri": "admin/monuments/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.update_order": {
                "uri": "admin/monuments/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.restore": {
                "uri": "admin/monuments/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.relation": {
                "uri": "admin/monuments/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.media.remove": {
                "uri": "admin/monuments/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.index": {
                "uri": "admin/monuments",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.create": {
                "uri": "admin/monuments/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.store": {
                "uri": "admin/monuments",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.show": {
                "uri": "admin/monuments/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.edit": {
                "uri": "admin/monuments/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.update": {
                "uri": "admin/monuments/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.monuments.destroy": {
                "uri": "admin/monuments/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.pictures.order": {
                "uri": "admin/pictures/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.action": {
                "uri": "admin/pictures/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.update_order": {
                "uri": "admin/pictures/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.restore": {
                "uri": "admin/pictures/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.relation": {
                "uri": "admin/pictures/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.media.remove": {
                "uri": "admin/pictures/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.index": {
                "uri": "admin/pictures",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.create": {
                "uri": "admin/pictures/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.store": {
                "uri": "admin/pictures",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.show": {
                "uri": "admin/pictures/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.edit": {
                "uri": "admin/pictures/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.update": {
                "uri": "admin/pictures/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.pictures.destroy": {
                "uri": "admin/pictures/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.relics.order": {
                "uri": "admin/relics/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.action": {
                "uri": "admin/relics/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.update_order": {
                "uri": "admin/relics/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.restore": {
                "uri": "admin/relics/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.relation": {
                "uri": "admin/relics/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.media.remove": {
                "uri": "admin/relics/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.index": {
                "uri": "admin/relics",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.create": {
                "uri": "admin/relics/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.store": {
                "uri": "admin/relics",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.show": {
                "uri": "admin/relics/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.edit": {
                "uri": "admin/relics/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.update": {
                "uri": "admin/relics/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.relics.destroy": {
                "uri": "admin/relics/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.videos.order": {
                "uri": "admin/videos/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.action": {
                "uri": "admin/videos/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.update_order": {
                "uri": "admin/videos/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.restore": {
                "uri": "admin/videos/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.relation": {
                "uri": "admin/videos/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.media.remove": {
                "uri": "admin/videos/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.index": {
                "uri": "admin/videos",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.create": {
                "uri": "admin/videos/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.store": {
                "uri": "admin/videos",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.show": {
                "uri": "admin/videos/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.edit": {
                "uri": "admin/videos/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.update": {
                "uri": "admin/videos/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.videos.destroy": {
                "uri": "admin/videos/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.movies.order": {
                "uri": "admin/movies/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.action": {
                "uri": "admin/movies/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.update_order": {
                "uri": "admin/movies/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.restore": {
                "uri": "admin/movies/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.relation": {
                "uri": "admin/movies/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.media.remove": {
                "uri": "admin/movies/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.index": {
                "uri": "admin/movies",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.create": {
                "uri": "admin/movies/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.store": {
                "uri": "admin/movies",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.show": {
                "uri": "admin/movies/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.edit": {
                "uri": "admin/movies/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.update": {
                "uri": "admin/movies/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.movies.destroy": {
                "uri": "admin/movies/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.museums.order": {
                "uri": "admin/museums/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.action": {
                "uri": "admin/museums/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.update_order": {
                "uri": "admin/museums/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.restore": {
                "uri": "admin/museums/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.relation": {
                "uri": "admin/museums/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.media.remove": {
                "uri": "admin/museums/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.index": {
                "uri": "admin/museums",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.create": {
                "uri": "admin/museums/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.store": {
                "uri": "admin/museums",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.show": {
                "uri": "admin/museums/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.edit": {
                "uri": "admin/museums/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.update": {
                "uri": "admin/museums/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.museums.destroy": {
                "uri": "admin/museums/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.questions.order": {
                "uri": "admin/questions/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.action": {
                "uri": "admin/questions/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.update_order": {
                "uri": "admin/questions/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.restore": {
                "uri": "admin/questions/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.relation": {
                "uri": "admin/questions/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.media.remove": {
                "uri": "admin/questions/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.index": {
                "uri": "admin/questions",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.create": {
                "uri": "admin/questions/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.store": {
                "uri": "admin/questions",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.show": {
                "uri": "admin/questions/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.edit": {
                "uri": "admin/questions/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.update": {
                "uri": "admin/questions/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.questions.destroy": {
                "uri": "admin/questions/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.menus.builder": {
                "uri": "admin/menus/{menu}/builder",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.order_item": {
                "uri": "admin/menus/{menu}/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.item.destroy": {
                "uri": "admin/menus/{menu}/item/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.menus.item.add": {
                "uri": "admin/menus/{menu}/item",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.item.update": {
                "uri": "admin/menus/{menu}/item",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.settings.index": {
                "uri": "admin/settings",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.settings.store": {
                "uri": "admin/settings",
                "methods": [
                    "POST"
                ]
            },
            "voyager.settings.update": {
                "uri": "admin/settings",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.settings.delete": {
                "uri": "admin/settings/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.settings.move_up": {
                "uri": "admin/settings/{id}/move_up",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.settings.move_down": {
                "uri": "admin/settings/{id}/move_down",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.settings.delete_value": {
                "uri": "admin/settings/{id}/delete_value",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.media.index": {
                "uri": "admin/media",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.media.files": {
                "uri": "admin/media/files",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.new_folder": {
                "uri": "admin/media/new_folder",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.delete": {
                "uri": "admin/media/delete_file_folder",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.move": {
                "uri": "admin/media/move_file",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.rename": {
                "uri": "admin/media/rename_file",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.upload": {
                "uri": "admin/media/upload",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.crop": {
                "uri": "admin/media/crop",
                "methods": [
                    "POST"
                ]
            },
            "voyager.bread.index": {
                "uri": "admin/bread",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.bread.create": {
                "uri": "admin/bread/{table}/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.bread.store": {
                "uri": "admin/bread",
                "methods": [
                    "POST"
                ]
            },
            "voyager.bread.edit": {
                "uri": "admin/bread/{table}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.bread.update": {
                "uri": "admin/bread/{id}",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.bread.delete": {
                "uri": "admin/bread/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.bread.relationship": {
                "uri": "admin/bread/relationship",
                "methods": [
                    "POST"
                ]
            },
            "voyager.bread.delete_relationship": {
                "uri": "admin/bread/delete_relationship/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.index": {
                "uri": "admin/database",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.create": {
                "uri": "admin/database/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.store": {
                "uri": "admin/database",
                "methods": [
                    "POST"
                ]
            },
            "voyager.database.show": {
                "uri": "admin/database/{database}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.edit": {
                "uri": "admin/database/{database}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.update": {
                "uri": "admin/database/{database}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.database.destroy": {
                "uri": "admin/database/{database}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.compass.index": {
                "uri": "admin/compass",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.compass.post": {
                "uri": "admin/compass",
                "methods": [
                    "POST"
                ]
            },
            "voyager.voyager_assets": {
                "uri": "admin/voyager-assets",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.index": {
                "uri": "admin/entities",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.chapters.index": {
                "uri": "admin/chapters",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.blocks.index": {
                "uri": "admin/blocks",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.edit": {
                "uri": "admin/entities/{entity}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.update": {
                "uri": "admin/entities/{entity}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.entities.order": {
                "uri": "admin/entities/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.action": {
                "uri": "admin/entities/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.update_order": {
                "uri": "admin/entities/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.restore": {
                "uri": "admin/entities/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.relation": {
                "uri": "admin/entities/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.media.remove": {
                "uri": "admin/entities/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.create": {
                "uri": "admin/entities/{entity}/chapters/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.store": {
                "uri": "admin/entities/{entity}/chapters",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.order": {
                "uri": "admin/entities/{entity}/chapters/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.action": {
                "uri": "admin/entities/{entity}/chapters/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.update_order": {
                "uri": "admin/entities/{entity}/chapters/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.restore": {
                "uri": "admin/entities/{entity}/chapters/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.relation": {
                "uri": "admin/entities/{entity}/chapters/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.media.remove": {
                "uri": "admin/entities/{entity}/chapters/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.create": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.store": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.action": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.update_order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.restore": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.relation": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.media.remove": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.create": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.store": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{map_dot}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{map_dot}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{map_dot}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.action": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.update_order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.restore": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.relation": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.media.remove": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.create": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.store": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{gallery_photo}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{gallery_photo}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{gallery_photo}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.action": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.update_order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.restore": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.relation": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.media.remove": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.call": {
                "uri": "admin/call",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            }
        },
        "location": "https://govorov.plitkalit.ru/test"
    },
    "questions": {
        "data": [
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Артиллерийская академия РККА имени Ф. Э. Дзержинского"
                        },
                        {
                            "sort": "200",
                            "text": "Военная академия РККА имени М. В. Фрунзе"
                        },
                        {
                            "sort": "300",
                            "text": "Константиновское артиллерийское училище"
                        },
                        {
                            "sort": "400",
                            "text": "Академия Генерального штаба РККА"
                        }
                    ]
                },
                "title": "В каком учебном заведении Леонид Говоров не только учился, но и преподавал?",
                "correct": "Артиллерийская академия РККА имени Ф. Э. Дзержинского",
                "sort": 1,
                "id": 1
            },
            {
                "answers": {
                    "correct": "3",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Ельнинская наступательная операция"
                        },
                        {
                            "sort": "200",
                            "text": "Можайско-Малоярославецкая оборонительная операция"
                        },
                        {
                            "sort": "300",
                            "text": "Выборгская наступательная операция"
                        },
                        {
                            "sort": "400",
                            "text": "Сталинградская оборонительная операция"
                        }
                    ]
                },
                "title": "В какой операции Леонид Говоров не принимал участия?",
                "correct": "Сталинградская оборонительная операция",
                "sort": 2,
                "id": 2
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "В 1925 году"
                        },
                        {
                            "sort": "200",
                            "text": "В 1932 году"
                        },
                        {
                            "sort": "300",
                            "text": "В 1942 году"
                        },
                        {
                            "sort": "400",
                            "text": "В 1945 году"
                        }
                    ]
                },
                "title": "В каком году Леонид Говоров был принят во Всесоюзную коммунистическую партию?",
                "correct": "В 1942 году",
                "sort": 3,
                "id": 3
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "«Ураган»"
                        },
                        {
                            "sort": "200",
                            "text": "«Шквал»"
                        },
                        {
                            "sort": "300",
                            "text": "«Тайфун»"
                        },
                        {
                            "sort": "400",
                            "text": "«Смерч»"
                        }
                    ]
                },
                "title": "Как называлась специальная операция по защите Ленинграда во время исполнения Седьмой симфонии Д. Д. Шостаковича?",
                "correct": "«Шквал»",
                "sort": 4,
                "id": 4
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "орденом Суворова I степени"
                        },
                        {
                            "sort": "200",
                            "text": "орденом Суворова II степени"
                        },
                        {
                            "sort": "300",
                            "text": "орденом Суворова III степени"
                        },
                        {
                            "sort": "400",
                            "text": "орденом Суворова IV степени"
                        }
                    ]
                },
                "title": "28 января 1943 года за операцию по прорыву блокады Ленинграда Говоров был награждён...",
                "correct": "орденом Суворова I степени",
                "sort": 5,
                "id": 5
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Битвы за Москву"
                        },
                        {
                            "sort": "200",
                            "text": "Прорыва блокады Ленинграда"
                        },
                        {
                            "sort": "300",
                            "text": "Взятия Выборга"
                        },
                        {
                            "sort": "400",
                            "text": "Освобождения Прибалтики"
                        }
                    ]
                },
                "title": "Леонид Говоров получил звание «Генерал армии» после...",
                "correct": "Прорыва блокады Ленинграда",
                "sort": 6,
                "id": 6
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "пресс-папье в виде танка"
                        },
                        {
                            "sort": "200",
                            "text": "чернильницу в виде танка"
                        },
                        {
                            "sort": "300",
                            "text": "пенал в виде танка"
                        },
                        {
                            "sort": "400",
                            "text": "стакан для ручек в виде танка"
                        }
                    ]
                },
                "title": "В ответ на доклад о нехватке танков в ходе подготовки операции «Искра» Сталин подарил Говорову...",
                "correct": "чернильницу в виде танка",
                "sort": 7,
                "id": 7
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "медалью «Золотая звезда»"
                        },
                        {
                            "sort": "200",
                            "text": "орденом Ленина"
                        },
                        {
                            "sort": "300",
                            "text": "орденом «Победа»"
                        },
                        {
                            "sort": "400",
                            "text": "медалью «За оборону Ленинграда»"
                        }
                    ]
                },
                "title": "31 мая 1945 года Леонид Говоров был награждён...",
                "correct": "орденом «Победа»",
                "sort": 8,
                "id": 8
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Волховским фронтом"
                        },
                        {
                            "sort": "200",
                            "text": "Ленинградским фронтом"
                        },
                        {
                            "sort": "300",
                            "text": "Карельским фронтом"
                        },
                        {
                            "sort": "400",
                            "text": "Балтийским флотом"
                        }
                    ]
                },
                "title": "Леонид Говоров был командующим...",
                "correct": "Ленинградским фронтом",
                "sort": 9,
                "id": 10
            },
            {
                "answers": {
                    "correct": "3",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "шахматы"
                        },
                        {
                            "sort": "200",
                            "text": "фотографию"
                        },
                        {
                            "sort": "300",
                            "text": "рыбалку"
                        },
                        {
                            "sort": "400",
                            "text": "чтение"
                        }
                    ]
                },
                "title": "Больше всего Леонид Говоров любил...",
                "correct": "чтение",
                "sort": 10,
                "id": 9
            }
        ]
    },
    "appquestions": {
        "data": [
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "1917 – 1991"
                        },
                        {
                            "sort": "200",
                            "text": "1897 – 1955"
                        },
                        {
                            "sort": "300",
                            "text": "1876 – 1934"
                        },
                        {
                            "sort": "400",
                            "text": "1899 – 1957"
                        }
                    ]
                },
                "title": "Отметьте годы жизни Л. А. Говорова:",
                "correct": "1897 – 1955",
                "sort": 1,
                "id": 11
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "строить железные дороги"
                        },
                        {
                            "sort": "200",
                            "text": "стать авиатором"
                        },
                        {
                            "sort": "300",
                            "text": "строить корабли"
                        },
                        {
                            "sort": "400",
                            "text": "стать кавалеристом"
                        }
                    ]
                },
                "title": "Поступив в 1916 году в Петроградский политехнический институт Л. А. Говоров исполнил свою детскую мечту...",
                "correct": "строить корабли",
                "sort": 2,
                "id": 12
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "младшим офицером в Сибирской мортирной батарее, а затем подпоручиком"
                        },
                        {
                            "sort": "200",
                            "text": "главнокомандующим Русской армии"
                        },
                        {
                            "sort": "300",
                            "text": "мичманом на крейсере «Аврора»"
                        },
                        {
                            "sort": "400",
                            "text": "прапорщиком 282-го пехотного полка"
                        }
                    ]
                },
                "title": "Во времена Первой мировой войны Л. А. Говоров служил...",
                "correct": "младшим офицером в Сибирской мортирной батарее, а затем подпоручиком",
                "sort": 3,
                "id": 13
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "воевал на юго-востоке Украины под руководством Н. Махно"
                        },
                        {
                            "sort": "200",
                            "text": "воевал в 1-й Конной армии С. М. Буденного"
                        },
                        {
                            "sort": "300",
                            "text": "принимал участие в наступлении армии Восточного фронта адмирала А. В. Колчака"
                        },
                        {
                            "sort": "400",
                            "text": "принимал участие в наступлении Северо-западной армии Н. Н. Юденича"
                        }
                    ]
                },
                "title": "В Гражданскую войну Л. А. Говоров...",
                "correct": "принимал участие в наступлении армии Восточного фронта адмирала А. В. Колчака",
                "sort": 4,
                "id": 14
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "в Трудовую армию"
                        },
                        {
                            "sort": "200",
                            "text": "в 51-ю стрелковую дивизию В. К. Блюхера"
                        },
                        {
                            "sort": "300",
                            "text": "в 7-ю армию по командованием М. Н. Тухачевского"
                        },
                        {
                            "sort": "400",
                            "text": "в Корниловскую ударную дивизию"
                        }
                    ]
                },
                "title": "В 1920 году Л. А. Говоров вступил добровольцем...",
                "correct": "в 51-ю стрелковую дивизию В. К. Блюхера",
                "sort": 5,
                "id": 15
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Артиллерийская академия РККА имени Ф. Э. Дзержинского"
                        },
                        {
                            "sort": "200",
                            "text": "Военная академия РККА имени М. В. Фрунзе"
                        },
                        {
                            "sort": "300",
                            "text": "Константиновское артиллерийское училище"
                        },
                        {
                            "sort": "400",
                            "text": "Академия Генерального штаба РККА"
                        }
                    ]
                },
                "title": "В каком учебном заведении Леонид Говоров не только учился, но и преподавал?",
                "correct": "Артиллерийская академия РККА имени Ф. Э. Дзержинского",
                "sort": 6,
                "id": 1
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "вице-адмирал"
                        },
                        {
                            "sort": "200",
                            "text": "инженер-контр-адмирал"
                        },
                        {
                            "sort": "300",
                            "text": "комбриг"
                        },
                        {
                            "sort": "400",
                            "text": "командир взвода"
                        }
                    ]
                },
                "title": "В 1936 году Л. А. Говорову было присвоено звание:",
                "correct": "комбриг",
                "sort": 7,
                "id": 16
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "в Советско-финской войне"
                        },
                        {
                            "sort": "200",
                            "text": "в боях на Халхин-Голе"
                        },
                        {
                            "sort": "300",
                            "text": "в Гражданской войне в Испании"
                        },
                        {
                            "sort": "400",
                            "text": "в Польском походе Красной армии"
                        }
                    ]
                },
                "title": "До Великой Отечественной войны Л. А. Говоров принял участие...",
                "correct": "в Советско-финской войне",
                "sort": 8,
                "id": 17
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "приказом К. Е. Ворошилова"
                        },
                        {
                            "sort": "200",
                            "text": "приказом Г. К. Жукова"
                        },
                        {
                            "sort": "300",
                            "text": "приказом И. В. Сталина"
                        },
                        {
                            "sort": "400",
                            "text": "приказом К. К. Рокоссовского"
                        }
                    ]
                },
                "title": "17 августа 1941 года Л. А. Говоров был назначен начальником артиллерии Резервного фронта...",
                "correct": "приказом Г. К. Жукова",
                "sort": 9,
                "id": 18
            },
            {
                "answers": {
                    "correct": "3",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Ельнинская наступательная операция"
                        },
                        {
                            "sort": "200",
                            "text": "Можайско-Малоярославецкая оборонительная операция"
                        },
                        {
                            "sort": "300",
                            "text": "Выборгская наступательная операция"
                        },
                        {
                            "sort": "400",
                            "text": "Сталинградская оборонительная операция"
                        }
                    ]
                },
                "title": "В какой операции Леонид Говоров не принимал участия?",
                "correct": "Сталинградская оборонительная операция",
                "sort": 10,
                "id": 2
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "в операции «Тайфун»"
                        },
                        {
                            "sort": "200",
                            "text": "в Вяземской операции"
                        },
                        {
                            "sort": "300",
                            "text": "в Можайско-Малоярославецкой операции"
                        },
                        {
                            "sort": "400",
                            "text": "в Орловско-Брянской оборонительной операции"
                        }
                    ]
                },
                "title": "В Битве за Москву Л. А. Говоров как командующий принял участие...",
                "correct": "в Можайско-Малоярославецкой операции",
                "sort": 11,
                "id": 19
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "В 1925 году"
                        },
                        {
                            "sort": "200",
                            "text": "В 1932 году"
                        },
                        {
                            "sort": "300",
                            "text": "В 1942 году"
                        },
                        {
                            "sort": "400",
                            "text": "В 1945 году"
                        }
                    ]
                },
                "title": "В каком году Леонид Говоров был принят во Всесоюзную коммунистическую партию?",
                "correct": "В 1942 году",
                "sort": 12,
                "id": 3
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Ленинградской группой войск Ленинградского фронта"
                        },
                        {
                            "sort": "200",
                            "text": "Калининским фронтом"
                        },
                        {
                            "sort": "300",
                            "text": "Волховским фронтом"
                        },
                        {
                            "sort": "400",
                            "text": "Карельским фронтом"
                        }
                    ]
                },
                "title": "25 апреля 1942 года Л. А. Говоров принял командование...",
                "correct": "Ленинградской группой войск Ленинградского фронта",
                "sort": 13,
                "id": 20
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "«Ураган»"
                        },
                        {
                            "sort": "200",
                            "text": "«Шквал»"
                        },
                        {
                            "sort": "300",
                            "text": "«Тайфун»"
                        },
                        {
                            "sort": "400",
                            "text": "«Смерч»"
                        }
                    ]
                },
                "title": "Как называлась специальная операция по защите Ленинграда во время исполнения Седьмой симфонии Д. Д. Шостаковича?",
                "correct": "«Шквал»",
                "sort": 14,
                "id": 4
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "орденом Суворова I степени"
                        },
                        {
                            "sort": "200",
                            "text": "орденом Суворова II степени"
                        },
                        {
                            "sort": "300",
                            "text": "орденом Суворова III степени"
                        },
                        {
                            "sort": "400",
                            "text": "орденом Суворова IV степени"
                        }
                    ]
                },
                "title": "28 января 1943 года за операцию по прорыву блокады Ленинграда Говоров был награждён...",
                "correct": "орденом Суворова I степени",
                "sort": 15,
                "id": 5
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "«Тайфун»"
                        },
                        {
                            "sort": "200",
                            "text": "«Уран»"
                        },
                        {
                            "sort": "300",
                            "text": "«Искра»"
                        },
                        {
                            "sort": "400",
                            "text": "«Шквал»"
                        }
                    ]
                },
                "title": "В ходе деблокады Ленинграда Л.А. Говоров в 1942 году разработал план операции...",
                "correct": "«Искра»",
                "sort": 16,
                "id": 21
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Битвы за Москву"
                        },
                        {
                            "sort": "200",
                            "text": "Прорыва блокады Ленинграда"
                        },
                        {
                            "sort": "300",
                            "text": "Взятия Выборга"
                        },
                        {
                            "sort": "400",
                            "text": "Освобождения Прибалтики"
                        }
                    ]
                },
                "title": "Леонид Говоров получил звание «Генерал армии» после...",
                "correct": "Прорыва блокады Ленинграда",
                "sort": 17,
                "id": 6
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "пресс-папье в виде танка"
                        },
                        {
                            "sort": "200",
                            "text": "чернильницу в виде танка"
                        },
                        {
                            "sort": "300",
                            "text": "пенал в виде танка"
                        },
                        {
                            "sort": "400",
                            "text": "стакан для ручек в виде танка"
                        }
                    ]
                },
                "title": "В ответ на доклад о нехватке танков в ходе подготовки операции «Искра» Сталин подарил Говорову...",
                "correct": "чернильницу в виде танка",
                "sort": 18,
                "id": 7
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "по приказу Г. К. Жукова"
                        },
                        {
                            "sort": "200",
                            "text": "по приказу И. В. Сталина"
                        },
                        {
                            "sort": "300",
                            "text": "по приказу Л. А. Говорова"
                        },
                        {
                            "sort": "400",
                            "text": "по приказу А. А. Жданова"
                        }
                    ]
                },
                "title": "27 января 1944 года был проведен салют в честь снятия блокады Ленинграда...",
                "correct": "по приказу Л. А. Говорова",
                "sort": 19,
                "id": 22
            },
            {
                "answers": {
                    "correct": "0",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "18 июня 1944 года"
                        },
                        {
                            "sort": "200",
                            "text": "23 августа 1939 года"
                        },
                        {
                            "sort": "300",
                            "text": "9 мая 1945 года"
                        },
                        {
                            "sort": "400",
                            "text": "3 марта 1942 года"
                        }
                    ]
                },
                "title": "Звание Маршала Советского Союза Л. А. Говорову было присвоено...",
                "correct": "18 июня 1944 года",
                "sort": 20,
                "id": 23
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "1-м Белорусским фронтом"
                        },
                        {
                            "sort": "200",
                            "text": "Северо-Западным фронтом"
                        },
                        {
                            "sort": "300",
                            "text": "2-м Прибалтийским фронтом"
                        },
                        {
                            "sort": "400",
                            "text": "1-м Украинским фронтом"
                        }
                    ]
                },
                "title": "В феврале 1945 года Л. А. Говоров стал командующим...",
                "correct": "2-м Прибалтийским фронтом",
                "sort": 21,
                "id": 24
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "медалью «Золотая звезда»"
                        },
                        {
                            "sort": "200",
                            "text": "орденом Ленина"
                        },
                        {
                            "sort": "300",
                            "text": "орденом «Победа»"
                        },
                        {
                            "sort": "400",
                            "text": "медалью «За оборону Ленинграда»"
                        }
                    ]
                },
                "title": "31 мая 1945 года Леонид Говоров был награждён...",
                "correct": "орденом «Победа»",
                "sort": 22,
                "id": 8
            },
            {
                "answers": {
                    "correct": "1",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "Волховским фронтом"
                        },
                        {
                            "sort": "200",
                            "text": "Ленинградским фронтом"
                        },
                        {
                            "sort": "300",
                            "text": "Карельским фронтом"
                        },
                        {
                            "sort": "400",
                            "text": "Балтийским флотом"
                        }
                    ]
                },
                "title": "Леонид Говоров был командующим...",
                "correct": "Ленинградским фронтом",
                "sort": 23,
                "id": 10
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "И. В. Сталин"
                        },
                        {
                            "sort": "200",
                            "text": "Г. К. Жуков"
                        },
                        {
                            "sort": "300",
                            "text": "И. Х. Баграмян"
                        },
                        {
                            "sort": "400",
                            "text": "А. А. Жданов"
                        }
                    ]
                },
                "title": "\"«Если бы у этого выдающегося военачальника Красной армии не было никаких других славных боевых дел, кроме героической обороны Ленинграда, то и тогда его имя навеки сохранили бы благородные потомки» – говорил...\"",
                "correct": "И. Х. Баграмян",
                "sort": 24,
                "id": 25
            },
            {
                "answers": {
                    "correct": "3",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "шахматы"
                        },
                        {
                            "sort": "200",
                            "text": "фотографию"
                        },
                        {
                            "sort": "300",
                            "text": "рыбалку"
                        },
                        {
                            "sort": "400",
                            "text": "чтение"
                        }
                    ]
                },
                "title": "Больше всего Леонид Говоров любил...",
                "correct": "чтение",
                "sort": 25,
                "id": 9
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "по состоянию здоровья ушел на пенсию"
                        },
                        {
                            "sort": "200",
                            "text": "стал депутатом Верховного Совета СССР"
                        },
                        {
                            "sort": "300",
                            "text": "занимал ряд высоких постов в Вооруженных силах СССР"
                        },
                        {
                            "sort": "400",
                            "text": "стал послом в США"
                        }
                    ]
                },
                "title": "После Великой Отечественной войны маршал Л. А. Говоров...",
                "correct": "занимал ряд высоких постов в Вооруженных силах СССР",
                "sort": 26,
                "id": 26
            },
            {
                "answers": {
                    "correct": "3",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "орденом Отечественной войны I степени"
                        },
                        {
                            "sort": "200",
                            "text": "орденом Отечественной войны II степени"
                        },
                        {
                            "sort": "300",
                            "text": "орденом «Красная Звезда»"
                        },
                        {
                            "sort": "400",
                            "text": "орденом «Победа»"
                        }
                    ]
                },
                "title": "За разгром немецких войск под Ленинградом и в Прибалтике 31 мая 1945 года Л. А. Говоров был награжден...",
                "correct": "орденом «Победа»",
                "sort": 27,
                "id": 27
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "на Ваганьковском кладбище в Москве"
                        },
                        {
                            "sort": "200",
                            "text": "у себя на родине в селе Бутырки"
                        },
                        {
                            "sort": "300",
                            "text": "в Кремлевской стене на Красной площади"
                        },
                        {
                            "sort": "400",
                            "text": "в Александро-Невской Лавре в Ленинграде"
                        }
                    ]
                },
                "title": "После смерти Л. А. Говоров был захоронен...",
                "correct": "в Кремлевской стене на Красной площади",
                "sort": 28,
                "id": 28
            },
            {
                "answers": {
                    "correct": "2",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "город в Ленинградской области"
                        },
                        {
                            "sort": "200",
                            "text": "станция метро в Ленинграде"
                        },
                        {
                            "sort": "300",
                            "text": "улица в Кировском районе Санкт-Петербурга"
                        },
                        {
                            "sort": "400",
                            "text": "миноносец Краснознаменного Балтийского флота"
                        }
                    ]
                },
                "title": "В память Л. А. Говорова были названы...",
                "correct": "улица в Кировском районе Санкт-Петербурга",
                "sort": 29,
                "id": 29
            },
            {
                "answers": {
                    "correct": "3",
                    "answers": [
                        {
                            "sort": "100",
                            "text": "перед Смольным институтом"
                        },
                        {
                            "sort": "200",
                            "text": "на площади Восстания"
                        },
                        {
                            "sort": "300",
                            "text": "на Марсовом поле"
                        },
                        {
                            "sort": "400",
                            "text": "на площади Стачек"
                        }
                    ]
                },
                "title": "Памятник Л. А. Говорову установлен в Санкт-Петербурге...",
                "correct": "на площади Стачек",
                "sort": 30,
                "id": 30
            }
        ]
    },
    "results": [
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории.",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории."
    ],
    "appresults": [
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "На ошибках учатся.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Далеко не лучший результат.<br/>Рекомендуем ознакомиться с экспозицией «Маршал Ленинградской Победы» еще раз.",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Средний результат.<br/>Вам следует быть внимательнее при просмотре экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Хороший результат!<br/>Вы неплохо усвоили содержание экспозиции «Маршал Ленинградской Победы»",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории.",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории.",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории.",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории.",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории.",
        "Отличный результат!<br/>Видимо, вы истинный знаток истории."
    ],
    "path": "/test"
}