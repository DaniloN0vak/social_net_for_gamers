import jenkins.model.*
import org.csanchez.jenkins.plugins.kubernetes.*

def jenkins = Jenkins.getInstance()
def cloud = jenkins.clouds.getByName("kubernetes")

def containerTemplate = new ContainerTemplate("jnlp", "user0107/jenkins-agent-dotnet:8")
containerTemplate.setAlwaysPullImage(false)
containerTemplate.setWorkingDir("/home/jenkins/agent")

def podTemplate = new PodTemplate()
podTemplate.setName("dotnet")
podTemplate.setLabel("dotnet")
podTemplate.setContainers([containerTemplate])
podTemplate.setNodeSelector("kubernetes.io/os=linux")

cloud.addTemplate(podTemplate)
jenkins.save()
