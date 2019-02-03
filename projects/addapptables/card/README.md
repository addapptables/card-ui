# ADDAPPTABLES card

ADAPTABLES card is a library for angular

[See demo](http://addapptables.com/admin/components/cards)

[Example code](https://stackblitz.com/edit/angular-card-addapptables)

## Getting Started
To get started, let's install the package through npm:

```
npm i @addapptables/card --S
```

Install peer dependencies

```
npm i
@addapptables/core
@angular/material
@angular/animations
@angular/cdk --S
```

## How to use

- Import the module CardModule

```typescript
import { CardModule } from '@addapptables/card';
@NgModule({
  imports: [CardModule]
})
export class YourModule { }
```

simple card
```html
<addapptable-card>
  <addapptable-card-header>
    <addapptable-card-header-linear>
      <addapptable-card-title>
        <mat-icon matSuffix>horizontal_split</mat-icon>
        <span>Simple card</span>
      </addapptable-card-title>
    </addapptable-card-header-linear>
  </addapptable-card-header>
  <mat-divider></mat-divider>
  <addapptable-card-body>
    // custom component
  </addapptable-card-body>
</addapptable-card>
```

Oval card
```html
<addapptable-card>
  <addapptable-card-header>
    <addapptable-card-header-oval>
      <addapptable-card-title>
        <mat-icon matSuffix>horizontal_split</mat-icon>
        <span>Oval card</span>
      </addapptable-card-title>
    </addapptable-card-header-oval>
  </addapptable-card-header>
  <addapptable-card-body>
    // custom component
  </addapptable-card-body>
</addapptable-card>
```

- Finaly, it is important to import the styles to the application

```scss
@import '~@addapptables/core/addapptables-grid.theme';
@import '~@angular/material/theming';
@import '~@addapptables/card/addapptables-card.theme';

$addapptable-app-primary: mat-palette($mat-teal, 800);
$addapptable-app-accent:  mat-palette($mat-pink, 800, A100, 100);
$addapptable-app-warn: mat-palette($mat-red);
$addapptable-app-theme: mat-light-theme($addapptable-app-primary, $addapptable-app-accent, $addapptable-app-warn);
$addapptable-theme-variables: (
    text: white,
    border-radius: 5px,
    color-blue: #20a9d2,
    color-success: #5cb85c,
    color-info: #5bc0de,
    color-warning: #e09d3d,
    color-danger: #d43934,
    gray-color: #696868
);
@include mat-core();
body.theme-default {
    @include angular-material-theme($addapptable-app-theme);
    @include addapptable-card($addapptable-app-theme, $addapptable-theme-variables);
}
```

- Do not forget to put the theme-default class in the html body

```html
<body class="theme-default"></body>
```
