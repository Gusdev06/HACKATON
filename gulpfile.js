const gulp = require('gulp') // Aqui importamos o gulp
const sass = require('gulp-sass')(require('sass')); // Importa o pacote Gulp-Sass, que é uma extensão do Gulp para compilar arquivos SASS em CSS
const imagemin = require('gulp-imagemin'); // Importa o pacote Gulp-Imagemin, que é uma extensão do Gulp para otimizar imagens
const uglify = require('gulp-uglify'); // Importa o pacote Gulp-Uglify, que é uma extensão do Gulp para minificar arquivos JavaScript


function scripts() {
    return gulp.src('./src/scripts/*.js') // Seleciona todos os arquivos JavaScript da pasta './src/scripts/'
        .pipe(uglify()) // Minifica os arquivos JavaScript
        .pipe(gulp.dest('./dist/js')); // Salva os arquivos minificados na pasta './dist/js/'
}

function styles() {
    return gulp.src('./src/styles/*.scss') // Seleciona todos os arquivos SASS da pasta './src/styles/'
        .pipe(sass({ outputStyle: 'compressed' })) // Compila os arquivos SASS para CSS e define o estilo de saída como 'compressed' (comprimido)
        .pipe(gulp.dest('./dist/css')); // Salva os arquivos CSS na pasta './dist/css/'
}


function images() {
    return gulp.src('./src/images/**/*') // Seleciona todos os arquivos de imagem da pasta './src/images/' e suas subpastas
        .pipe(imagemin()) // Otimiza as imagens
        .pipe(gulp.dest('./dist/images')); // Salva as imagens otimizadas na pasta './dist/images/'
}

exports.default = gulp.parallel(styles, images, scripts); // Define a tarefa padrão, que executa em paralelo as tarefas de styles, images e scripts

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Monitora alterações nos arquivos SASS e executa a tarefa styles quando houver mudanças
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts)); // Monitora alterações nos arquivos JavaScript e executa a tarefa scripts quando houver mudanças
    gulp.watch('./src/images/**/*', gulp.parallel(images)); // Monitora alterações nos arquivos JavaScript e executa a tarefa scripts quando houver mudanças
}