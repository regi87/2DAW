<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use AppBundle\Entity\Tabla_Entidad;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        //captura el repositorio de la tabla contra la base de datos
        $repository = $this->getDoctrine()->getRepository(Tabla_Entidad::class);
  
        $tabla_entidad = $repository->findAll();

        return $this -> render(
            'examen/examen.html.twig',
        $arrayName = array('array_tabla_entidad' => $tabla_entidad)
        );
    }

    /**
     * @Route("/listado/", name="listado")
     */
    public function listadoAction(Request $request)
    {
        //captura el repositorio de la tabla contra la base de datos
        $repository = $this->getDoctrine()->getRepository(Tabla_Entidad::class);
  
        $tabla_entidad = $repository->findAll();

        return $this -> render(
            'listadoMorosos/listado.html.twig', array('array_tabla_entidad' => $tabla_entidad)
        );
    }

     /**
     * @Route("/listadoPersonal/{id}", name="listadoPersonal")
     */
    public function listadoPersonalAction(Request $request, $id )
    {
        //captura el repositorio de la tabla contra la base de datos
        
        $repository = $this->getDoctrine()->getRepository(Tabla_Entidad::class);
        $usuario =  $repository->findOneById($id);
        return $this -> render(
            'listadoMorosos/listaPersonal.html.twig', array('usuario' => $usuario)
        );
    }
}
