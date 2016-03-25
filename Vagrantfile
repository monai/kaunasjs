# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "centos72" do |centos71|
    centos71.vm.box = "boxcutter/centos72"
    centos71.vm.provision "shell", path: "tools/provision.sh", args: "centos71"
  end
end
