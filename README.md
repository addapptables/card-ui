# ADDAPPTABLES card

[See demo](http://addapptables.com/admin/components/cards)

## Getting Started
To get started, lets install the package thru npm:

```
npm i @addapptables/card --S
```

Install peer dependencies

```
npm i
@ngx-translate/core
@angular/material
@angular/animations
@angular/cdk --S
```

## Configuration

Configure @ngx-translate/core see [link](https://github.com/ngx-translate/core)

## How to use

simple card
```html
<addapptable-card>
  <addapptable-card-header>
    <addapptable-card-header-linear>
      <addapptable-card-title>
        <mat-icon matSuffix>horizontal_split</mat-icon>
        <span>{{'card.simple' | translate}}</span>
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
        <span>{{'card.oval' | translate}}</span>
      </addapptable-card-title>
    </addapptable-card-header-oval>
  </addapptable-card-header>
  <addapptable-card-body>
    // custom component
  </addapptable-card-body>
</addapptable-card>
```

```scss
@import '~@angular/material/theming';
@import '~@addapptables/card/_addapptables-card.theme';

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

body.theme-default {
    @include addapptable-card($addapptable-app-theme, $addapptable-theme-variables);
}
```