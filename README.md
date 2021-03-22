# About

This is a web-application for medical professionals to log activities designed to improve their clinical teaching skills. Participants will complete specific activities within certain medical education domains and record them in this tool so that passport program directors can monitor their progress and optimize mentoring.The tool will include the date they complete these activities and a log of each of the activities. This project will enable UChicago Section of Hospital Medicine to transform an excel file into a more functional and user-friendly tool.

## Pre-reqs

To begin development on the project, the following dependencies must be previously installed on your developmental machine:

 1. Node.js (v12+)
 2. Yarn
 3. Git

## Installation

Use the package manager yarn to install all project dependencies as listed in package.json

```bash
yarn install
```

## Developmental Usage

### Setting Environment Variables

As this project uses SendGrid to send emails, a SendGrid API key is required to enable email transactions. In order to set the API key, use the following file:

##### For Windows:
In **sendgrid.bat**, replace **SENDGRID_API_PLACEHOLDER** with your key, save, and run the batch file.

##### For MacOS or Linux:
In **sendgrid.env**, replace **SENDGRID_API_PLACEHOLDER** with your key, save, and run the bash file.

### Starting the Developmental live server

To start developmental live server run:
```nodejs
yarn dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Front-End Developmental Plan

The project is a react application, utilizing material-ui react library for  components for the user interface. The data-visualization library will utilize D3.js and Victory.js.

[Material UI](https://material-ui.com/)
[D3.js](https://d3js.org/)
[Victory](https://github.com/formidablelabs/victory)

Expected front-end work required for this site includes:
```
- [x] Logins
- [ ] Registrations
- [ ] Analytics page
- [ ] Home page
- [ ] Questionnaire pages (pages where the user answers)
- [ ] FAQ page
- [ ] Contact page (to report bugs or communication with site admins)
```

## Testing

Test cases are placed in the /tests folder.
```
yarn test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
