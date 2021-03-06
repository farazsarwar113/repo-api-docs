define({ "api": [
  {
    "type": "post",
    "url": "api/github/repositories",
    "title": "Add GitHub Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Add_GitHub_Repository",
    "group": "GitHub",
    "description": "<p>This api is used to add GitHub repository. In body name, description should be passed.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully added GitHub repository\",\n   \"success\": true,\n   \"data\": {\n       repository : {\n\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "get",
    "url": "api/github/repositories/:repo_name/:id",
    "title": "Get GitHub Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_name",
            "description": "<p>Repository name.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitHub_Repository",
    "group": "GitHub",
    "description": "<p>This api is used to get GitHub specific repository data.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched GitHub specific repository\",\n   \"success\": true,\n   \"data\": {\n       repositories : {\n\n       },\n       file_tree:[{}]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "get",
    "url": "api/github/repositories/:repo_name/commits/:id",
    "title": "Get GitHub Repository Commits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_name",
            "description": "<p>Repository name.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitHub_Repository_Commits",
    "group": "GitHub",
    "description": "<p>This api is used to get GitHub repository commits.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched GitHub repository commits\",\n   \"success\": true,\n   \"data\": {\n         commits: [{}]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "get",
    "url": "api/github/repositories/:repo_name/contributors/:id",
    "title": "Get GitHub Repository Contributors",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_name",
            "description": "<p>Repository name.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitHub_Repository_Contributors",
    "group": "GitHub",
    "description": "<p>This api is used to get GitHub specific repository contributors data.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched GitHub repository contributors\",\n   \"success\": true,\n   \"data\": {\n         contributors: [{}]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "post",
    "url": "api/github/me/:id",
    "title": "Get GitHub User Data",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitHub_User_Data",
    "group": "GitHub",
    "description": "<p>This api is used to get GitHub user account details.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched user GitHub account details\",\n   \"success\": true,\n   \"data\": {\n       github_user : \"\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "post",
    "url": "api/github/login/:id",
    "title": "GitHub Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "GitHub_Login",
    "group": "GitHub",
    "description": "<p>This api is used to login into the GitHub account to sync user GitHub account. In body username and password of GitHub account should be given.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully login to GitHub account\",\n   \"success\": true,\n   \"data\": {\n       github_user : \"\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "get",
    "url": "api/github/repositories/:id",
    "title": "GitHub Repositories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "GitHub_Repositories",
    "group": "GitHub",
    "description": "<p>This api is used to get all GitHub repositories of logged in user.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched all GitHub repositories\",\n   \"success\": true,\n   \"data\": {\n       repositories : [{\n\n       }]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "put",
    "url": "api/github/repositories/:repo_name/:id",
    "title": "Update GitHub Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_name",
            "description": "<p>Repository name.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Update_GitHub_Repository",
    "group": "GitHub",
    "description": "<p>This api is used to update GitHub specific repository data. In body name, description should be passed.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully updated GitHub specific repository\",\n   \"success\": true,\n   \"data\": {\n       repositories : {\n\n       },\n       file_tree:[{}]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/github/github.router.js",
    "groupTitle": "GitHub"
  },
  {
    "type": "post",
    "url": "api/gitlab/repositories/add",
    "title": "Add GitLab Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Add_GitLab_Repository",
    "group": "GitLab",
    "description": "<p>This api is used to add gitlab repository. In body name, description, private: boolen should be passed.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully added GitLab repository\",\n   \"success\": true,\n   \"data\": {\n       repository : {\n\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "post",
    "url": "api/gitlab/repositories/:rid/members/add",
    "title": "Add GitLab Repository Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Add_GitLab_Repository_Member",
    "group": "GitLab",
    "description": "<p>This api is used to add specific gitlab repository member. In body, gitlab user username whom you wanted to add and access level, it will be a number. 40 to give full access, 30 for developer access, 20 for guest.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully add GitLab repository member\",\n   \"success\": true,\n   \"data\": {\n       repository_member : {\n\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "delete",
    "url": "api/gitlab/repositories/:rid",
    "title": "Delete GitLab Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Delete_GitLab_Repository",
    "group": "GitLab",
    "description": "<p>This api is used to delete specific gitlab repository.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully deleted GitLab repository\",\n   \"success\": true,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "delete",
    "url": "api/gitlab/repositories/:rid/members/:mid",
    "title": "Delete GitLab Repository Member",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mid",
            "description": "<p>Member unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Delete_GitLab_Repository_Member",
    "group": "GitLab",
    "description": "<p>This api is used to delete specific gitlab repository member.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully deleted GitLab repository member\",\n   \"success\": true,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "get",
    "url": "api/gitlab/repositories/:rid",
    "title": "Get GitLab Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitLab_Repository",
    "group": "GitLab",
    "description": "<p>This api is used to get specific gitlab repository.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched GitLab specific repository data\",\n   \"success\": true,\n   \"data\": {\n       repository : {\n\n       },\n       file_tree: [{}]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "get",
    "url": "api/gitlab/repositories/:rid/commits",
    "title": "Get GitLab Repository Commits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitLab_Repository_Commits",
    "group": "GitLab",
    "description": "<p>This api is used to get specific gitlab repository commits.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched GitLab repository commits\",\n   \"success\": true,\n   \"data\": {\n        commits: [{}]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "get",
    "url": "api/gitlab/repositories/:rid/members",
    "title": "Get GitLab Repository Members",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Get_GitLab_Repository_Members",
    "group": "GitLab",
    "description": "<p>This api is used to get specific gitlab repository all members.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched GitLab specific repository members\",\n   \"success\": true,\n   \"data\": {\n       repository_members : [{\n\n       }]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "post",
    "url": "api/gitlab/login",
    "title": "GitLab Login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "GitLab_Login",
    "group": "GitLab",
    "description": "<p>This api is used to login into the gitlab account to sync user gitlab account. In body username and private token (which can be found on gitlab account setting) of GitLab account should be given.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully login to GitLab account\",\n   \"success\": true,\n   \"data\": {\n       gitlab_user : \"\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "get",
    "url": "api/gitlab/repositories",
    "title": "GitLab Repositories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "GitLab_Repositories",
    "group": "GitLab",
    "description": "<p>This api is used to get all gitlab repositories of logged in user.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully fetched all GitLab repositories\",\n   \"success\": true,\n   \"data\": {\n       repositories : [{\n\n       }]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "put",
    "url": "api/gitlab/repositories/:rid",
    "title": "Update GitLab Repository",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "private-token",
            "description": "<p>private token of GitLab account entered at the time of login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rid",
            "description": "<p>Repository unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "Update_GitLab_Repository",
    "group": "GitLab",
    "description": "<p>This api is used to update specific gitlab repository. In body name, description, private: boolen should be passed.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Successfully updated GitLab repository data\",\n   \"success\": true,\n   \"data\": {\n       repository : {\n\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/gitlab/gitlab.router.js",
    "groupTitle": "GitLab"
  },
  {
    "type": "post",
    "url": "api/users/login",
    "title": "Login",
    "version": "0.1.0",
    "name": "Login",
    "group": "User",
    "description": "<p>This api is used to login into the app. In body username and password should be given which is entered at the time of register. The main server who calls this login api will save the token to that user to call the further api The token will be attached in the header for all other request</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Login successful - (Existing/New User)\",\n   \"success\": true,\n   \"data\": {\n       token : \"\",\n       user : {}\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/users/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/users/register",
    "title": "Register",
    "version": "0.1.0",
    "name": "Register",
    "group": "User",
    "description": "<p>This api is used to register user into the app. User firstname, lastname, username and password should be given in body. If username already exists server return with an error. Username should be unique.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"User registered\",\n   \"success\": true,\n   \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/users/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/users/me",
    "title": "User Detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access token provided by this API server at the time of login.</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "name": "User_Detail",
    "group": "User",
    "description": "<p>This api is used to get user detail data which is logged in.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"User data fetched successful\",\n   \"success\": true,\n   \"data\": {\n       token : \"\",\n       user : {}\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "features/users/user.router.js",
    "groupTitle": "User"
  }
] });
