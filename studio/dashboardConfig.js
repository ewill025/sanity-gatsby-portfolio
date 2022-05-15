export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6280646d2bb7b758b4d9b458',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6obr825v',
                  apiId: 'a65331b5-3f74-443c-979d-187d9c38e2cc'
                },
                {
                  buildHookId: '6280646e88893061000822e4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uhb9c5pz',
                  apiId: '10f341e9-cd52-4b58-8400-04179fba88f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ewill025/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uhb9c5pz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
