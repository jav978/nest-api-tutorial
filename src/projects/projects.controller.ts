import { Controller, Get } from "@nestjs/common";

@Controller({})
export class ProjectsController{

    @Get('/projects')
    getAllProjects(){
        return 'Obteniendo todos los proyectos';
    }

    @Get('/')
    index(){
        return 'Pagina Inicial';
    }

}